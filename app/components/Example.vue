<template>
    <v-container class="mt-4">
        <v-row>
            <v-col cols="12">
                <v-card flat class="mb-5">
                    <v-card-title class="font-style text-h5 text-start">Example</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card flat class="mb-4 pa-4 border">
                    <strong>Step 1:</strong> Create a new component named <code>FAQ.vue</code> inside the
                    <code>components</code> directory.
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card flat class="mb-4 pa-4 border">
                    <strong>Step 2:</strong>
                    Then do a simple data table to display the list of FAQs with the ability to create, edit, and delete
                    FAQ records.
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card flat class="mb-4 pa-4 border">
                    <strong>Step 3: </strong>Do basic crud with the following data structure for the backend API
                    endpoints:
                    <pre>
                    {
                        id: number,
                        question: string,
                        answer: string,
                        category: string,
                        isActive: boolean
                    }
                    </pre>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

// Search Matrix and State Control
const search = ref('')
const dialogState = ref(false)
const isFormValid = ref(false)
const formRef = ref(null)

// Hardcoded System Lookup Categorization Types
const categories = ['General', 'Payroll', 'Account & Security', 'Leave Management']

// Explicit Data Table Setup Structure Headers
const headers = [
    { title: 'ID', align: 'start', key: 'id', width: '70px' },
    { title: 'Question', align: 'start', key: 'question', sortable: true },
    { title: 'Answer Content', align: 'start', key: 'answer', sortable: false },
    { title: 'Category Domain', align: 'center', key: 'category' },
    { title: 'Actions', align: 'center', key: 'actions', sortable: false, width: '120px' }
]

// Seed Initialization Data Mocking Active FAQ Store Array
const faqList = ref([
    { id: 101, question: 'How can I view my monthly payroll summary ledger slips?', answer: 'Navigate inside your personal user profile page container stack and tap into the payroll directory segment to view PDF downloads.', category: 'Payroll', isActive: true },
    { id: 102, question: 'What steps should I execute if my password resets are failing?', answer: 'Reach out to your network security support center via email or dispatch a direct system registration request hook to the IT admin desk.', category: 'Account & Security', isActive: true },
    { id: 103, question: 'Where are standard file attachments like static documents kept?', answer: 'All static processing forms are hosted directly inside the web public root asset folder layout engine.', category: 'General', isActive: false }
])

// Reference Object Blueprint used to Reset or Track Edits
const defaultItem = {
    id: null,
    question: '',
    answer: '',
    category: 'General',
    isActive: true
}

const editedItem = ref({ ...defaultItem })
const editedIndex = ref(-1)

// Dynamic Form Header Computed Calculation Check
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Compose New System FAQ Entry' : 'Modify Existing FAQ Record'
})

// Modal Open Protocols
const openCreateModal = () => {
    editedIndex.value = -1
    editedItem.value = { ...defaultItem }
    dialogState.value = true
}

const openEditModal = (item) => {
    editedIndex.value = faqList.value.indexOf(item)
    editedItem.value = { ...item }
    dialogState.value = true
}

const closeModal = () => {
    dialogState.value = false
    if (formRef.value) formRef.value.resetValidation()
    editedItem.value = { ...defaultItem }
    editedIndex.value = -1
}

// Write/Save Processing Pipeline (Creates or Updates depending on editedIndex context)
const saveFAQ = async () => {
    if (!formRef.value) return
    const { valid } = await formRef.value.validate()

    if (valid) {
        if (editedIndex.value > -1) {
            // Execute UPDATE Sequence
            Object.assign(faqList.value[editedIndex.value], editedItem.value)
        } else {
            // Execute CREATE Sequence
            const generateId = faqList.value.length ? Math.max(...faqList.value.map(f => f.id)) + 1 : 101
            faqList.value.push({
                ...editedItem.value,
                id: generateId
            })
        }
        closeModal()
    }
}

// Delete Processing Hook
const deleteFAQ = (id) => {
    if (confirm('Are you absolutely certain you want to purge this FAQ record entry?')) {
        faqList.value = faqList.value.filter(item => item.id !== id)
    }
}
</script>

<style scoped>
/* Scanned ellipsis truncation for tables */
.text-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>