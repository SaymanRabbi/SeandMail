userSchema.methods.tokenConfirmation = function(){
    const token = crypto.randomBytes(32).toString('hex');
    this.confirmationToken = token
    const date = new Date();
    date.setDate(date.getDate()+1);
    this.confirmationTokenExp = date;
    return token;
}