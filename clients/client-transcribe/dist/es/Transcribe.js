import { __extends } from "tslib";
import { TranscribeClient } from "./TranscribeClient";
import { CreateLanguageModelCommand, } from "./commands/CreateLanguageModelCommand";
import { CreateMedicalVocabularyCommand, } from "./commands/CreateMedicalVocabularyCommand";
import { CreateVocabularyCommand, } from "./commands/CreateVocabularyCommand";
import { CreateVocabularyFilterCommand, } from "./commands/CreateVocabularyFilterCommand";
import { DeleteLanguageModelCommand, } from "./commands/DeleteLanguageModelCommand";
import { DeleteMedicalTranscriptionJobCommand, } from "./commands/DeleteMedicalTranscriptionJobCommand";
import { DeleteMedicalVocabularyCommand, } from "./commands/DeleteMedicalVocabularyCommand";
import { DeleteTranscriptionJobCommand, } from "./commands/DeleteTranscriptionJobCommand";
import { DeleteVocabularyCommand, } from "./commands/DeleteVocabularyCommand";
import { DeleteVocabularyFilterCommand, } from "./commands/DeleteVocabularyFilterCommand";
import { DescribeLanguageModelCommand, } from "./commands/DescribeLanguageModelCommand";
import { GetMedicalTranscriptionJobCommand, } from "./commands/GetMedicalTranscriptionJobCommand";
import { GetMedicalVocabularyCommand, } from "./commands/GetMedicalVocabularyCommand";
import { GetTranscriptionJobCommand, } from "./commands/GetTranscriptionJobCommand";
import { GetVocabularyCommand, } from "./commands/GetVocabularyCommand";
import { GetVocabularyFilterCommand, } from "./commands/GetVocabularyFilterCommand";
import { ListLanguageModelsCommand, } from "./commands/ListLanguageModelsCommand";
import { ListMedicalTranscriptionJobsCommand, } from "./commands/ListMedicalTranscriptionJobsCommand";
import { ListMedicalVocabulariesCommand, } from "./commands/ListMedicalVocabulariesCommand";
import { ListTranscriptionJobsCommand, } from "./commands/ListTranscriptionJobsCommand";
import { ListVocabulariesCommand, } from "./commands/ListVocabulariesCommand";
import { ListVocabularyFiltersCommand, } from "./commands/ListVocabularyFiltersCommand";
import { StartMedicalTranscriptionJobCommand, } from "./commands/StartMedicalTranscriptionJobCommand";
import { StartTranscriptionJobCommand, } from "./commands/StartTranscriptionJobCommand";
import { UpdateMedicalVocabularyCommand, } from "./commands/UpdateMedicalVocabularyCommand";
import { UpdateVocabularyCommand, } from "./commands/UpdateVocabularyCommand";
import { UpdateVocabularyFilterCommand, } from "./commands/UpdateVocabularyFilterCommand";
/**
 * <p>Operations and objects for transcribing speech to text.</p>
 */
var Transcribe = /** @class */ (function (_super) {
    __extends(Transcribe, _super);
    function Transcribe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transcribe.prototype.createLanguageModel = function (args, optionsOrCb, cb) {
        var command = new CreateLanguageModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.createMedicalVocabulary = function (args, optionsOrCb, cb) {
        var command = new CreateMedicalVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.createVocabulary = function (args, optionsOrCb, cb) {
        var command = new CreateVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.createVocabularyFilter = function (args, optionsOrCb, cb) {
        var command = new CreateVocabularyFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.deleteLanguageModel = function (args, optionsOrCb, cb) {
        var command = new DeleteLanguageModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.deleteMedicalTranscriptionJob = function (args, optionsOrCb, cb) {
        var command = new DeleteMedicalTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.deleteMedicalVocabulary = function (args, optionsOrCb, cb) {
        var command = new DeleteMedicalVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.deleteTranscriptionJob = function (args, optionsOrCb, cb) {
        var command = new DeleteTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.deleteVocabulary = function (args, optionsOrCb, cb) {
        var command = new DeleteVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.deleteVocabularyFilter = function (args, optionsOrCb, cb) {
        var command = new DeleteVocabularyFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.describeLanguageModel = function (args, optionsOrCb, cb) {
        var command = new DescribeLanguageModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.getMedicalTranscriptionJob = function (args, optionsOrCb, cb) {
        var command = new GetMedicalTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.getMedicalVocabulary = function (args, optionsOrCb, cb) {
        var command = new GetMedicalVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.getTranscriptionJob = function (args, optionsOrCb, cb) {
        var command = new GetTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.getVocabulary = function (args, optionsOrCb, cb) {
        var command = new GetVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.getVocabularyFilter = function (args, optionsOrCb, cb) {
        var command = new GetVocabularyFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.listLanguageModels = function (args, optionsOrCb, cb) {
        var command = new ListLanguageModelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.listMedicalTranscriptionJobs = function (args, optionsOrCb, cb) {
        var command = new ListMedicalTranscriptionJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.listMedicalVocabularies = function (args, optionsOrCb, cb) {
        var command = new ListMedicalVocabulariesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.listTranscriptionJobs = function (args, optionsOrCb, cb) {
        var command = new ListTranscriptionJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.listVocabularies = function (args, optionsOrCb, cb) {
        var command = new ListVocabulariesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.listVocabularyFilters = function (args, optionsOrCb, cb) {
        var command = new ListVocabularyFiltersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.startMedicalTranscriptionJob = function (args, optionsOrCb, cb) {
        var command = new StartMedicalTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.startTranscriptionJob = function (args, optionsOrCb, cb) {
        var command = new StartTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.updateMedicalVocabulary = function (args, optionsOrCb, cb) {
        var command = new UpdateMedicalVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.updateVocabulary = function (args, optionsOrCb, cb) {
        var command = new UpdateVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Transcribe.prototype.updateVocabularyFilter = function (args, optionsOrCb, cb) {
        var command = new UpdateVocabularyFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return Transcribe;
}(TranscribeClient));
export { Transcribe };
//# sourceMappingURL=Transcribe.js.map