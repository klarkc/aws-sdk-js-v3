"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kendra = void 0;
const KendraClient_1 = require("./KendraClient");
const BatchDeleteDocumentCommand_1 = require("./commands/BatchDeleteDocumentCommand");
const BatchPutDocumentCommand_1 = require("./commands/BatchPutDocumentCommand");
const ClearQuerySuggestionsCommand_1 = require("./commands/ClearQuerySuggestionsCommand");
const CreateDataSourceCommand_1 = require("./commands/CreateDataSourceCommand");
const CreateFaqCommand_1 = require("./commands/CreateFaqCommand");
const CreateIndexCommand_1 = require("./commands/CreateIndexCommand");
const CreateQuerySuggestionsBlockListCommand_1 = require("./commands/CreateQuerySuggestionsBlockListCommand");
const CreateThesaurusCommand_1 = require("./commands/CreateThesaurusCommand");
const DeleteDataSourceCommand_1 = require("./commands/DeleteDataSourceCommand");
const DeleteFaqCommand_1 = require("./commands/DeleteFaqCommand");
const DeleteIndexCommand_1 = require("./commands/DeleteIndexCommand");
const DeleteQuerySuggestionsBlockListCommand_1 = require("./commands/DeleteQuerySuggestionsBlockListCommand");
const DeleteThesaurusCommand_1 = require("./commands/DeleteThesaurusCommand");
const DescribeDataSourceCommand_1 = require("./commands/DescribeDataSourceCommand");
const DescribeFaqCommand_1 = require("./commands/DescribeFaqCommand");
const DescribeIndexCommand_1 = require("./commands/DescribeIndexCommand");
const DescribeQuerySuggestionsBlockListCommand_1 = require("./commands/DescribeQuerySuggestionsBlockListCommand");
const DescribeQuerySuggestionsConfigCommand_1 = require("./commands/DescribeQuerySuggestionsConfigCommand");
const DescribeThesaurusCommand_1 = require("./commands/DescribeThesaurusCommand");
const GetQuerySuggestionsCommand_1 = require("./commands/GetQuerySuggestionsCommand");
const ListDataSourceSyncJobsCommand_1 = require("./commands/ListDataSourceSyncJobsCommand");
const ListDataSourcesCommand_1 = require("./commands/ListDataSourcesCommand");
const ListFaqsCommand_1 = require("./commands/ListFaqsCommand");
const ListIndicesCommand_1 = require("./commands/ListIndicesCommand");
const ListQuerySuggestionsBlockListsCommand_1 = require("./commands/ListQuerySuggestionsBlockListsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListThesauriCommand_1 = require("./commands/ListThesauriCommand");
const QueryCommand_1 = require("./commands/QueryCommand");
const StartDataSourceSyncJobCommand_1 = require("./commands/StartDataSourceSyncJobCommand");
const StopDataSourceSyncJobCommand_1 = require("./commands/StopDataSourceSyncJobCommand");
const SubmitFeedbackCommand_1 = require("./commands/SubmitFeedbackCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDataSourceCommand_1 = require("./commands/UpdateDataSourceCommand");
const UpdateIndexCommand_1 = require("./commands/UpdateIndexCommand");
const UpdateQuerySuggestionsBlockListCommand_1 = require("./commands/UpdateQuerySuggestionsBlockListCommand");
const UpdateQuerySuggestionsConfigCommand_1 = require("./commands/UpdateQuerySuggestionsConfigCommand");
const UpdateThesaurusCommand_1 = require("./commands/UpdateThesaurusCommand");
/**
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
 */
class Kendra extends KendraClient_1.KendraClient {
    batchDeleteDocument(args, optionsOrCb, cb) {
        const command = new BatchDeleteDocumentCommand_1.BatchDeleteDocumentCommand(args);
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
    batchPutDocument(args, optionsOrCb, cb) {
        const command = new BatchPutDocumentCommand_1.BatchPutDocumentCommand(args);
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
    clearQuerySuggestions(args, optionsOrCb, cb) {
        const command = new ClearQuerySuggestionsCommand_1.ClearQuerySuggestionsCommand(args);
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
    createDataSource(args, optionsOrCb, cb) {
        const command = new CreateDataSourceCommand_1.CreateDataSourceCommand(args);
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
    createFaq(args, optionsOrCb, cb) {
        const command = new CreateFaqCommand_1.CreateFaqCommand(args);
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
    createIndex(args, optionsOrCb, cb) {
        const command = new CreateIndexCommand_1.CreateIndexCommand(args);
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
    createQuerySuggestionsBlockList(args, optionsOrCb, cb) {
        const command = new CreateQuerySuggestionsBlockListCommand_1.CreateQuerySuggestionsBlockListCommand(args);
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
    createThesaurus(args, optionsOrCb, cb) {
        const command = new CreateThesaurusCommand_1.CreateThesaurusCommand(args);
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
    deleteDataSource(args, optionsOrCb, cb) {
        const command = new DeleteDataSourceCommand_1.DeleteDataSourceCommand(args);
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
    deleteFaq(args, optionsOrCb, cb) {
        const command = new DeleteFaqCommand_1.DeleteFaqCommand(args);
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
    deleteIndex(args, optionsOrCb, cb) {
        const command = new DeleteIndexCommand_1.DeleteIndexCommand(args);
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
    deleteQuerySuggestionsBlockList(args, optionsOrCb, cb) {
        const command = new DeleteQuerySuggestionsBlockListCommand_1.DeleteQuerySuggestionsBlockListCommand(args);
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
    deleteThesaurus(args, optionsOrCb, cb) {
        const command = new DeleteThesaurusCommand_1.DeleteThesaurusCommand(args);
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
    describeDataSource(args, optionsOrCb, cb) {
        const command = new DescribeDataSourceCommand_1.DescribeDataSourceCommand(args);
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
    describeFaq(args, optionsOrCb, cb) {
        const command = new DescribeFaqCommand_1.DescribeFaqCommand(args);
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
    describeIndex(args, optionsOrCb, cb) {
        const command = new DescribeIndexCommand_1.DescribeIndexCommand(args);
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
    describeQuerySuggestionsBlockList(args, optionsOrCb, cb) {
        const command = new DescribeQuerySuggestionsBlockListCommand_1.DescribeQuerySuggestionsBlockListCommand(args);
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
    describeQuerySuggestionsConfig(args, optionsOrCb, cb) {
        const command = new DescribeQuerySuggestionsConfigCommand_1.DescribeQuerySuggestionsConfigCommand(args);
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
    describeThesaurus(args, optionsOrCb, cb) {
        const command = new DescribeThesaurusCommand_1.DescribeThesaurusCommand(args);
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
    getQuerySuggestions(args, optionsOrCb, cb) {
        const command = new GetQuerySuggestionsCommand_1.GetQuerySuggestionsCommand(args);
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
    listDataSources(args, optionsOrCb, cb) {
        const command = new ListDataSourcesCommand_1.ListDataSourcesCommand(args);
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
    listDataSourceSyncJobs(args, optionsOrCb, cb) {
        const command = new ListDataSourceSyncJobsCommand_1.ListDataSourceSyncJobsCommand(args);
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
    listFaqs(args, optionsOrCb, cb) {
        const command = new ListFaqsCommand_1.ListFaqsCommand(args);
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
    listIndices(args, optionsOrCb, cb) {
        const command = new ListIndicesCommand_1.ListIndicesCommand(args);
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
    listQuerySuggestionsBlockLists(args, optionsOrCb, cb) {
        const command = new ListQuerySuggestionsBlockListsCommand_1.ListQuerySuggestionsBlockListsCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    listThesauri(args, optionsOrCb, cb) {
        const command = new ListThesauriCommand_1.ListThesauriCommand(args);
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
    query(args, optionsOrCb, cb) {
        const command = new QueryCommand_1.QueryCommand(args);
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
    startDataSourceSyncJob(args, optionsOrCb, cb) {
        const command = new StartDataSourceSyncJobCommand_1.StartDataSourceSyncJobCommand(args);
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
    stopDataSourceSyncJob(args, optionsOrCb, cb) {
        const command = new StopDataSourceSyncJobCommand_1.StopDataSourceSyncJobCommand(args);
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
    submitFeedback(args, optionsOrCb, cb) {
        const command = new SubmitFeedbackCommand_1.SubmitFeedbackCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
    updateDataSource(args, optionsOrCb, cb) {
        const command = new UpdateDataSourceCommand_1.UpdateDataSourceCommand(args);
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
    updateIndex(args, optionsOrCb, cb) {
        const command = new UpdateIndexCommand_1.UpdateIndexCommand(args);
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
    updateQuerySuggestionsBlockList(args, optionsOrCb, cb) {
        const command = new UpdateQuerySuggestionsBlockListCommand_1.UpdateQuerySuggestionsBlockListCommand(args);
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
    updateQuerySuggestionsConfig(args, optionsOrCb, cb) {
        const command = new UpdateQuerySuggestionsConfigCommand_1.UpdateQuerySuggestionsConfigCommand(args);
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
    updateThesaurus(args, optionsOrCb, cb) {
        const command = new UpdateThesaurusCommand_1.UpdateThesaurusCommand(args);
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
exports.Kendra = Kendra;
//# sourceMappingURL=Kendra.js.map