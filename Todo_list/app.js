const App = {
    data(){
        return {
            counter: 0,
            title: 'Todo list',
            inputValue: '',
            notes: ['Note 1', 'Note 2']
        }
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            if(this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        inputKeypress(event){
            if(event.key === 'Enter'){
                this.addNewNote()
            }
        },
        deleteNote(id){
            this.notes.splice(id, 1)
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')