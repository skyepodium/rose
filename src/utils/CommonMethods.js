export default {
    emptyCheck ( val ) {
        if(val === '' || val === null || val === undefined){
            return false
        }
        else {
            return true
        }
    }
}