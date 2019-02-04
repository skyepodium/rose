const mixin = {
    methods: {
        vali ( val , type) {
            if(this.emptyCheck(val) && this.regexCheck( val, type)) return true
            else return false
        },
        emptyCheck ( val ) {
            if(val === '' || val === null || val === undefined){
                return false
            }
            else {
                return true
            }
        },
        regexCheck ( value, type ) {
            let regex;
            if( type === 'email' ) {
                regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
            } else if ( type == 'password' ) {
                regex = /^[a-zA-Z0-9]{8,15}$/
            }
            if(regex.test(value)) {
                return true
            }
            else {
                return false
            }
        }
    }
};

export default mixin