"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forecast = void 0;
const ForecastClient_1 = require("./ForecastClient");
const CreateDatasetCommand_1 = require("./commands/CreateDatasetCommand");
const CreateDatasetGroupCommand_1 = require("./commands/CreateDatasetGroupCommand");
const CreateDatasetImportJobCommand_1 = require("./commands/CreateDatasetImportJobCommand");
const CreateForecastCommand_1 = require("./commands/CreateForecastCommand");
const CreateForecastExportJobCommand_1 = require("./commands/CreateForecastExportJobCommand");
const CreatePredictorBacktestExportJobCommand_1 = require("./commands/CreatePredictorBacktestExportJobCommand");
const CreatePredictorCommand_1 = require("./commands/CreatePredictorCommand");
const DeleteDatasetCommand_1 = require("./commands/DeleteDatasetCommand");
const DeleteDatasetGroupCommand_1 = require("./commands/DeleteDatasetGroupCommand");
const DeleteDatasetImportJobCommand_1 = require("./commands/DeleteDatasetImportJobCommand");
const DeleteForecastCommand_1 = require("./commands/DeleteForecastCommand");
const DeleteForecastExportJobCommand_1 = require("./commands/DeleteForecastExportJobCommand");
const DeletePredictorBacktestExportJobCommand_1 = require("./commands/DeletePredictorBacktestExportJobCommand");
const DeletePredictorCommand_1 = require("./commands/DeletePredictorCommand");
const DeleteResourceTreeCommand_1 = require("./commands/DeleteResourceTreeCommand");
const DescribeDatasetCommand_1 = require("./commands/DescribeDatasetCommand");
const DescribeDatasetGroupCommand_1 = require("./commands/DescribeDatasetGroupCommand");
const DescribeDatasetImportJobCommand_1 = require("./commands/DescribeDatasetImportJobCommand");
const DescribeForecastCommand_1 = require("./commands/DescribeForecastCommand");
const DescribeForecastExportJobCommand_1 = require("./commands/DescribeForecastExportJobCommand");
const DescribePredictorBacktestExportJobCommand_1 = require("./commands/DescribePredictorBacktestExportJobCommand");
const DescribePredictorCommand_1 = require("./commands/DescribePredictorCommand");
const GetAccuracyMetricsCommand_1 = require("./commands/GetAccuracyMetricsCommand");
const ListDatasetGroupsCommand_1 = require("./commands/ListDatasetGroupsCommand");
const ListDatasetImportJobsCommand_1 = require("./commands/ListDatasetImportJobsCommand");
const ListDatasetsCommand_1 = require("./commands/ListDatasetsCommand");
const ListForecastExportJobsCommand_1 = require("./commands/ListForecastExportJobsCommand");
const ListForecastsCommand_1 = require("./commands/ListForecastsCommand");
const ListPredictorBacktestExportJobsCommand_1 = require("./commands/ListPredictorBacktestExportJobsCommand");
const ListPredictorsCommand_1 = require("./commands/ListPredictorsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const StopResourceCommand_1 = require("./commands/StopResourceCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDatasetGroupCommand_1 = require("./commands/UpdateDatasetGroupCommand");
/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
class Forecast extends ForecastClient_1.ForecastClient {
    createDataset(args, optionsOrCb, cb) {
        const command = new CreateDatasetCommand_1.CreateDatasetCommand(args);
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
    createDatasetGroup(args, optionsOrCb, cb) {
        const command = new CreateDatasetGroupCommand_1.CreateDatasetGroupCommand(args);
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
    createDatasetImportJob(args, optionsOrCb, cb) {
        const command = new CreateDatasetImportJobCommand_1.CreateDatasetImportJobCommand(args);
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
    createForecast(args, optionsOrCb, cb) {
        const command = new CreateForecastCommand_1.CreateForecastCommand(args);
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
    createForecastExportJob(args, optionsOrCb, cb) {
        const command = new CreateForecastExportJobCommand_1.CreateForecastExportJobCommand(args);
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
    createPredictor(args, optionsOrCb, cb) {
        const command = new CreatePredictorCommand_1.CreatePredictorCommand(args);
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
    createPredictorBacktestExportJob(args, optionsOrCb, cb) {
        const command = new CreatePredictorBacktestExportJobCommand_1.CreatePredictorBacktestExportJobCommand(args);
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
    deleteDataset(args, optionsOrCb, cb) {
        const command = new DeleteDatasetCommand_1.DeleteDatasetCommand(args);
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
    deleteDatasetGroup(args, optionsOrCb, cb) {
        const command = new DeleteDatasetGroupCommand_1.DeleteDatasetGroupCommand(args);
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
    deleteDatasetImportJob(args, optionsOrCb, cb) {
        const command = new DeleteDatasetImportJobCommand_1.DeleteDatasetImportJobCommand(args);
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
    deleteForecast(args, optionsOrCb, cb) {
        const command = new DeleteForecastCommand_1.DeleteForecastCommand(args);
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
    deleteForecastExportJob(args, optionsOrCb, cb) {
        const command = new DeleteForecastExportJobCommand_1.DeleteForecastExportJobCommand(args);
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
    deletePredictor(args, optionsOrCb, cb) {
        const command = new DeletePredictorCommand_1.DeletePredictorCommand(args);
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
    deletePredictorBacktestExportJob(args, optionsOrCb, cb) {
        const command = new DeletePredictorBacktestExportJobCommand_1.DeletePredictorBacktestExportJobCommand(args);
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
    deleteResourceTree(args, optionsOrCb, cb) {
        const command = new DeleteResourceTreeCommand_1.DeleteResourceTreeCommand(args);
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
    describeDataset(args, optionsOrCb, cb) {
        const command = new DescribeDatasetCommand_1.DescribeDatasetCommand(args);
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
    describeDatasetGroup(args, optionsOrCb, cb) {
        const command = new DescribeDatasetGroupCommand_1.DescribeDatasetGroupCommand(args);
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
    describeDatasetImportJob(args, optionsOrCb, cb) {
        const command = new DescribeDatasetImportJobCommand_1.DescribeDatasetImportJobCommand(args);
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
    describeForecast(args, optionsOrCb, cb) {
        const command = new DescribeForecastCommand_1.DescribeForecastCommand(args);
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
    describeForecastExportJob(args, optionsOrCb, cb) {
        const command = new DescribeForecastExportJobCommand_1.DescribeForecastExportJobCommand(args);
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
    describePredictor(args, optionsOrCb, cb) {
        const command = new DescribePredictorCommand_1.DescribePredictorCommand(args);
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
    describePredictorBacktestExportJob(args, optionsOrCb, cb) {
        const command = new DescribePredictorBacktestExportJobCommand_1.DescribePredictorBacktestExportJobCommand(args);
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
    getAccuracyMetrics(args, optionsOrCb, cb) {
        const command = new GetAccuracyMetricsCommand_1.GetAccuracyMetricsCommand(args);
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
    listDatasetGroups(args, optionsOrCb, cb) {
        const command = new ListDatasetGroupsCommand_1.ListDatasetGroupsCommand(args);
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
    listDatasetImportJobs(args, optionsOrCb, cb) {
        const command = new ListDatasetImportJobsCommand_1.ListDatasetImportJobsCommand(args);
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
    listDatasets(args, optionsOrCb, cb) {
        const command = new ListDatasetsCommand_1.ListDatasetsCommand(args);
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
    listForecastExportJobs(args, optionsOrCb, cb) {
        const command = new ListForecastExportJobsCommand_1.ListForecastExportJobsCommand(args);
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
    listForecasts(args, optionsOrCb, cb) {
        const command = new ListForecastsCommand_1.ListForecastsCommand(args);
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
    listPredictorBacktestExportJobs(args, optionsOrCb, cb) {
        const command = new ListPredictorBacktestExportJobsCommand_1.ListPredictorBacktestExportJobsCommand(args);
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
    listPredictors(args, optionsOrCb, cb) {
        const command = new ListPredictorsCommand_1.ListPredictorsCommand(args);
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
    stopResource(args, optionsOrCb, cb) {
        const command = new StopResourceCommand_1.StopResourceCommand(args);
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
    updateDatasetGroup(args, optionsOrCb, cb) {
        const command = new UpdateDatasetGroupCommand_1.UpdateDatasetGroupCommand(args);
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
exports.Forecast = Forecast;
//# sourceMappingURL=Forecast.js.map