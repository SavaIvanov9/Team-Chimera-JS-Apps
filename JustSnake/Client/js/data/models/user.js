class User {
    constructor(id, name, createdOn, modifiedOn, isDeleted, highScores) {
        this._name = name;
        this._createdOn = createdOn;
        this._modifiedOn = modifiedOn;
        this._isDeleted = isDeleted;
        this._highScores = highScores;
    }
}