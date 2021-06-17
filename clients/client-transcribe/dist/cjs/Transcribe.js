"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transcribe = void 0;
const TranscribeClient_1 = require("./TranscribeClient");
const CreateLanguageModelCommand_1 = require("./commands/CreateLanguageModelCommand");
const CreateMedicalVocabularyCommand_1 = require("./commands/CreateMedicalVocabularyCommand");
const CreateVocabularyCommand_1 = require("./commands/CreateVocabularyCommand");
const CreateVocabularyFilterCommand_1 = require("./commands/CreateVocabularyFilterCommand");
const DeleteLanguageModelCommand_1 = require("./commands/DeleteLanguageModelCommand");
const DeleteMedicalTranscriptionJobCommand_1 = require("./commands/DeleteMedicalTranscriptionJobCommand");
const DeleteMedicalVocabularyCommand_1 = require("./commands/DeleteMedicalVocabularyCommand");
const DeleteTranscriptionJobCommand_1 = require("./commands/DeleteTranscriptionJobCommand");
const DeleteVocabularyCommand_1 = require("./commands/DeleteVocabularyCommand");
const DeleteVocabularyFilterCommand_1 = require("./commands/DeleteVocabularyFilterCommand");
const DescribeLanguageModelCommand_1 = require("./commands/DescribeLanguageModelCommand");
const GetMedicalTranscriptionJobCommand_1 = require("./commands/GetMedicalTranscriptionJobCommand");
const GetMedicalVocabularyCommand_1 = require("./commands/GetMedicalVocabularyCommand");
const GetTranscriptionJobCommand_1 = require("./commands/GetTranscriptionJobCommand");
const GetVocabularyCommand_1 = require("./commands/GetVocabularyCommand");
const GetVocabularyFilterCommand_1 = require("./commands/GetVocabularyFilterCommand");
const ListLanguageModelsCommand_1 = require("./commands/ListLanguageModelsCommand");
const ListMedicalTranscriptionJobsCommand_1 = require("./commands/ListMedicalTranscriptionJobsCommand");
const ListMedicalVocabulariesCommand_1 = require("./commands/ListMedicalVocabulariesCommand");
const ListTranscriptionJobsCommand_1 = require("./commands/ListTranscriptionJobsCommand");
const ListVocabulariesCommand_1 = require("./commands/ListVocabulariesCommand");
const ListVocabularyFiltersCommand_1 = require("./commands/ListVocabularyFiltersCommand");
const StartMedicalTranscriptionJobCommand_1 = require("./commands/StartMedicalTranscriptionJobCommand");
const StartTranscriptionJobCommand_1 = require("./commands/StartTranscriptionJobCommand");
const UpdateMedicalVocabularyCommand_1 = require("./commands/UpdateMedicalVocabularyCommand");
const UpdateVocabularyCommand_1 = require("./commands/UpdateVocabularyCommand");
const UpdateVocabularyFilterCommand_1 = require("./commands/UpdateVocabularyFilterCommand");
/**
 * <p>Operations and objects for transcribing speech to text.</p>
 */
class Transcribe extends TranscribeClient_1.TranscribeClient {
    createLanguageModel(args, optionsOrCb, cb) {
        const command = new CreateLanguageModelCommand_1.CreateLanguageModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createMedicalVocabulary(args, optionsOrCb, cb) {
        const command = new CreateMedicalVocabularyCommand_1.CreateMedicalVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVocabulary(args, optionsOrCb, cb) {
        const command = new CreateVocabularyCommand_1.CreateVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVocabularyFilter(args, optionsOrCb, cb) {
        const command = new CreateVocabularyFilterCommand_1.CreateVocabularyFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLanguageModel(args, optionsOrCb, cb) {
        const command = new DeleteLanguageModelCommand_1.DeleteLanguageModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMedicalTranscriptionJob(args, optionsOrCb, cb) {
        const command = new DeleteMedicalTranscriptionJobCommand_1.DeleteMedicalTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMedicalVocabulary(args, optionsOrCb, cb) {
        const command = new DeleteMedicalVocabularyCommand_1.DeleteMedicalVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTranscriptionJob(args, optionsOrCb, cb) {
        const command = new DeleteTranscriptionJobCommand_1.DeleteTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVocabulary(args, optionsOrCb, cb) {
        const command = new DeleteVocabularyCommand_1.DeleteVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVocabularyFilter(args, optionsOrCb, cb) {
        const command = new DeleteVocabularyFilterCommand_1.DeleteVocabularyFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLanguageModel(args, optionsOrCb, cb) {
        const command = new DescribeLanguageModelCommand_1.DescribeLanguageModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMedicalTranscriptionJob(args, optionsOrCb, cb) {
        const command = new GetMedicalTranscriptionJobCommand_1.GetMedicalTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getMedicalVocabulary(args, optionsOrCb, cb) {
        const command = new GetMedicalVocabularyCommand_1.GetMedicalVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTranscriptionJob(args, optionsOrCb, cb) {
        const command = new GetTranscriptionJobCommand_1.GetTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getVocabulary(args, optionsOrCb, cb) {
        const command = new GetVocabularyCommand_1.GetVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getVocabularyFilter(args, optionsOrCb, cb) {
        const command = new GetVocabularyFilterCommand_1.GetVocabularyFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLanguageModels(args, optionsOrCb, cb) {
        const command = new ListLanguageModelsCommand_1.ListLanguageModelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMedicalTranscriptionJobs(args, optionsOrCb, cb) {
        const command = new ListMedicalTranscriptionJobsCommand_1.ListMedicalTranscriptionJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMedicalVocabularies(args, optionsOrCb, cb) {
        const command = new ListMedicalVocabulariesCommand_1.ListMedicalVocabulariesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTranscriptionJobs(args, optionsOrCb, cb) {
        const command = new ListTranscriptionJobsCommand_1.ListTranscriptionJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listVocabularies(args, optionsOrCb, cb) {
        const command = new ListVocabulariesCommand_1.ListVocabulariesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listVocabularyFilters(args, optionsOrCb, cb) {
        const command = new ListVocabularyFiltersCommand_1.ListVocabularyFiltersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startMedicalTranscriptionJob(args, optionsOrCb, cb) {
        const command = new StartMedicalTranscriptionJobCommand_1.StartMedicalTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startTranscriptionJob(args, optionsOrCb, cb) {
        const command = new StartTranscriptionJobCommand_1.StartTranscriptionJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMedicalVocabulary(args, optionsOrCb, cb) {
        const command = new UpdateMedicalVocabularyCommand_1.UpdateMedicalVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateVocabulary(args, optionsOrCb, cb) {
        const command = new UpdateVocabularyCommand_1.UpdateVocabularyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateVocabularyFilter(args, optionsOrCb, cb) {
        const command = new UpdateVocabularyFilterCommand_1.UpdateVocabularyFilterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Transcribe = Transcribe;
//# sourceMappingURL=Transcribe.js.map