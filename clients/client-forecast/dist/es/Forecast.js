import { __extends } from "tslib";
import { ForecastClient } from "./ForecastClient";
import { CreateDatasetCommand, } from "./commands/CreateDatasetCommand";
import { CreateDatasetGroupCommand, } from "./commands/CreateDatasetGroupCommand";
import { CreateDatasetImportJobCommand, } from "./commands/CreateDatasetImportJobCommand";
import { CreateForecastCommand, } from "./commands/CreateForecastCommand";
import { CreateForecastExportJobCommand, } from "./commands/CreateForecastExportJobCommand";
import { CreatePredictorBacktestExportJobCommand, } from "./commands/CreatePredictorBacktestExportJobCommand";
import { CreatePredictorCommand, } from "./commands/CreatePredictorCommand";
import { DeleteDatasetCommand, } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommand, } from "./commands/DeleteDatasetGroupCommand";
import { DeleteDatasetImportJobCommand, } from "./commands/DeleteDatasetImportJobCommand";
import { DeleteForecastCommand, } from "./commands/DeleteForecastCommand";
import { DeleteForecastExportJobCommand, } from "./commands/DeleteForecastExportJobCommand";
import { DeletePredictorBacktestExportJobCommand, } from "./commands/DeletePredictorBacktestExportJobCommand";
import { DeletePredictorCommand, } from "./commands/DeletePredictorCommand";
import { DeleteResourceTreeCommand, } from "./commands/DeleteResourceTreeCommand";
import { DescribeDatasetCommand, } from "./commands/DescribeDatasetCommand";
import { DescribeDatasetGroupCommand, } from "./commands/DescribeDatasetGroupCommand";
import { DescribeDatasetImportJobCommand, } from "./commands/DescribeDatasetImportJobCommand";
import { DescribeForecastCommand, } from "./commands/DescribeForecastCommand";
import { DescribeForecastExportJobCommand, } from "./commands/DescribeForecastExportJobCommand";
import { DescribePredictorBacktestExportJobCommand, } from "./commands/DescribePredictorBacktestExportJobCommand";
import { DescribePredictorCommand, } from "./commands/DescribePredictorCommand";
import { GetAccuracyMetricsCommand, } from "./commands/GetAccuracyMetricsCommand";
import { ListDatasetGroupsCommand, } from "./commands/ListDatasetGroupsCommand";
import { ListDatasetImportJobsCommand, } from "./commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommand, } from "./commands/ListDatasetsCommand";
import { ListForecastExportJobsCommand, } from "./commands/ListForecastExportJobsCommand";
import { ListForecastsCommand, } from "./commands/ListForecastsCommand";
import { ListPredictorBacktestExportJobsCommand, } from "./commands/ListPredictorBacktestExportJobsCommand";
import { ListPredictorsCommand, } from "./commands/ListPredictorsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { StopResourceCommand, } from "./commands/StopResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateDatasetGroupCommand, } from "./commands/UpdateDatasetGroupCommand";
/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
var Forecast = /** @class */ (function (_super) {
    __extends(Forecast, _super);
    function Forecast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Forecast.prototype.createDataset = function (args, optionsOrCb, cb) {
        var command = new CreateDatasetCommand(args);
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
    Forecast.prototype.createDatasetGroup = function (args, optionsOrCb, cb) {
        var command = new CreateDatasetGroupCommand(args);
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
    Forecast.prototype.createDatasetImportJob = function (args, optionsOrCb, cb) {
        var command = new CreateDatasetImportJobCommand(args);
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
    Forecast.prototype.createForecast = function (args, optionsOrCb, cb) {
        var command = new CreateForecastCommand(args);
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
    Forecast.prototype.createForecastExportJob = function (args, optionsOrCb, cb) {
        var command = new CreateForecastExportJobCommand(args);
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
    Forecast.prototype.createPredictor = function (args, optionsOrCb, cb) {
        var command = new CreatePredictorCommand(args);
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
    Forecast.prototype.createPredictorBacktestExportJob = function (args, optionsOrCb, cb) {
        var command = new CreatePredictorBacktestExportJobCommand(args);
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
    Forecast.prototype.deleteDataset = function (args, optionsOrCb, cb) {
        var command = new DeleteDatasetCommand(args);
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
    Forecast.prototype.deleteDatasetGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteDatasetGroupCommand(args);
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
    Forecast.prototype.deleteDatasetImportJob = function (args, optionsOrCb, cb) {
        var command = new DeleteDatasetImportJobCommand(args);
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
    Forecast.prototype.deleteForecast = function (args, optionsOrCb, cb) {
        var command = new DeleteForecastCommand(args);
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
    Forecast.prototype.deleteForecastExportJob = function (args, optionsOrCb, cb) {
        var command = new DeleteForecastExportJobCommand(args);
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
    Forecast.prototype.deletePredictor = function (args, optionsOrCb, cb) {
        var command = new DeletePredictorCommand(args);
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
    Forecast.prototype.deletePredictorBacktestExportJob = function (args, optionsOrCb, cb) {
        var command = new DeletePredictorBacktestExportJobCommand(args);
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
    Forecast.prototype.deleteResourceTree = function (args, optionsOrCb, cb) {
        var command = new DeleteResourceTreeCommand(args);
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
    Forecast.prototype.describeDataset = function (args, optionsOrCb, cb) {
        var command = new DescribeDatasetCommand(args);
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
    Forecast.prototype.describeDatasetGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeDatasetGroupCommand(args);
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
    Forecast.prototype.describeDatasetImportJob = function (args, optionsOrCb, cb) {
        var command = new DescribeDatasetImportJobCommand(args);
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
    Forecast.prototype.describeForecast = function (args, optionsOrCb, cb) {
        var command = new DescribeForecastCommand(args);
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
    Forecast.prototype.describeForecastExportJob = function (args, optionsOrCb, cb) {
        var command = new DescribeForecastExportJobCommand(args);
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
    Forecast.prototype.describePredictor = function (args, optionsOrCb, cb) {
        var command = new DescribePredictorCommand(args);
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
    Forecast.prototype.describePredictorBacktestExportJob = function (args, optionsOrCb, cb) {
        var command = new DescribePredictorBacktestExportJobCommand(args);
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
    Forecast.prototype.getAccuracyMetrics = function (args, optionsOrCb, cb) {
        var command = new GetAccuracyMetricsCommand(args);
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
    Forecast.prototype.listDatasetGroups = function (args, optionsOrCb, cb) {
        var command = new ListDatasetGroupsCommand(args);
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
    Forecast.prototype.listDatasetImportJobs = function (args, optionsOrCb, cb) {
        var command = new ListDatasetImportJobsCommand(args);
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
    Forecast.prototype.listDatasets = function (args, optionsOrCb, cb) {
        var command = new ListDatasetsCommand(args);
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
    Forecast.prototype.listForecastExportJobs = function (args, optionsOrCb, cb) {
        var command = new ListForecastExportJobsCommand(args);
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
    Forecast.prototype.listForecasts = function (args, optionsOrCb, cb) {
        var command = new ListForecastsCommand(args);
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
    Forecast.prototype.listPredictorBacktestExportJobs = function (args, optionsOrCb, cb) {
        var command = new ListPredictorBacktestExportJobsCommand(args);
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
    Forecast.prototype.listPredictors = function (args, optionsOrCb, cb) {
        var command = new ListPredictorsCommand(args);
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
    Forecast.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
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
    Forecast.prototype.stopResource = function (args, optionsOrCb, cb) {
        var command = new StopResourceCommand(args);
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
    Forecast.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
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
    Forecast.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
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
    Forecast.prototype.updateDatasetGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateDatasetGroupCommand(args);
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
    return Forecast;
}(ForecastClient));
export { Forecast };
//# sourceMappingURL=Forecast.js.map