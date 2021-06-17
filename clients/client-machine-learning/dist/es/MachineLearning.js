import { __extends } from "tslib";
import { MachineLearningClient } from "./MachineLearningClient";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { CreateBatchPredictionCommand, } from "./commands/CreateBatchPredictionCommand";
import { CreateDataSourceFromRDSCommand, } from "./commands/CreateDataSourceFromRDSCommand";
import { CreateDataSourceFromRedshiftCommand, } from "./commands/CreateDataSourceFromRedshiftCommand";
import { CreateDataSourceFromS3Command, } from "./commands/CreateDataSourceFromS3Command";
import { CreateEvaluationCommand, } from "./commands/CreateEvaluationCommand";
import { CreateMLModelCommand, } from "./commands/CreateMLModelCommand";
import { CreateRealtimeEndpointCommand, } from "./commands/CreateRealtimeEndpointCommand";
import { DeleteBatchPredictionCommand, } from "./commands/DeleteBatchPredictionCommand";
import { DeleteDataSourceCommand, } from "./commands/DeleteDataSourceCommand";
import { DeleteEvaluationCommand, } from "./commands/DeleteEvaluationCommand";
import { DeleteMLModelCommand, } from "./commands/DeleteMLModelCommand";
import { DeleteRealtimeEndpointCommand, } from "./commands/DeleteRealtimeEndpointCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DescribeBatchPredictionsCommand, } from "./commands/DescribeBatchPredictionsCommand";
import { DescribeDataSourcesCommand, } from "./commands/DescribeDataSourcesCommand";
import { DescribeEvaluationsCommand, } from "./commands/DescribeEvaluationsCommand";
import { DescribeMLModelsCommand, } from "./commands/DescribeMLModelsCommand";
import { DescribeTagsCommand, } from "./commands/DescribeTagsCommand";
import { GetBatchPredictionCommand, } from "./commands/GetBatchPredictionCommand";
import { GetDataSourceCommand, } from "./commands/GetDataSourceCommand";
import { GetEvaluationCommand, } from "./commands/GetEvaluationCommand";
import { GetMLModelCommand } from "./commands/GetMLModelCommand";
import { PredictCommand } from "./commands/PredictCommand";
import { UpdateBatchPredictionCommand, } from "./commands/UpdateBatchPredictionCommand";
import { UpdateDataSourceCommand, } from "./commands/UpdateDataSourceCommand";
import { UpdateEvaluationCommand, } from "./commands/UpdateEvaluationCommand";
import { UpdateMLModelCommand, } from "./commands/UpdateMLModelCommand";
/**
 * Definition of the public APIs
 * 		exposed by Amazon Machine Learning
 */
var MachineLearning = /** @class */ (function (_super) {
    __extends(MachineLearning, _super);
    function MachineLearning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MachineLearning.prototype.addTags = function (args, optionsOrCb, cb) {
        var command = new AddTagsCommand(args);
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
    MachineLearning.prototype.createBatchPrediction = function (args, optionsOrCb, cb) {
        var command = new CreateBatchPredictionCommand(args);
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
    MachineLearning.prototype.createDataSourceFromRDS = function (args, optionsOrCb, cb) {
        var command = new CreateDataSourceFromRDSCommand(args);
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
    MachineLearning.prototype.createDataSourceFromRedshift = function (args, optionsOrCb, cb) {
        var command = new CreateDataSourceFromRedshiftCommand(args);
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
    MachineLearning.prototype.createDataSourceFromS3 = function (args, optionsOrCb, cb) {
        var command = new CreateDataSourceFromS3Command(args);
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
    MachineLearning.prototype.createEvaluation = function (args, optionsOrCb, cb) {
        var command = new CreateEvaluationCommand(args);
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
    MachineLearning.prototype.createMLModel = function (args, optionsOrCb, cb) {
        var command = new CreateMLModelCommand(args);
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
    MachineLearning.prototype.createRealtimeEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateRealtimeEndpointCommand(args);
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
    MachineLearning.prototype.deleteBatchPrediction = function (args, optionsOrCb, cb) {
        var command = new DeleteBatchPredictionCommand(args);
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
    MachineLearning.prototype.deleteDataSource = function (args, optionsOrCb, cb) {
        var command = new DeleteDataSourceCommand(args);
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
    MachineLearning.prototype.deleteEvaluation = function (args, optionsOrCb, cb) {
        var command = new DeleteEvaluationCommand(args);
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
    MachineLearning.prototype.deleteMLModel = function (args, optionsOrCb, cb) {
        var command = new DeleteMLModelCommand(args);
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
    MachineLearning.prototype.deleteRealtimeEndpoint = function (args, optionsOrCb, cb) {
        var command = new DeleteRealtimeEndpointCommand(args);
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
    MachineLearning.prototype.deleteTags = function (args, optionsOrCb, cb) {
        var command = new DeleteTagsCommand(args);
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
    MachineLearning.prototype.describeBatchPredictions = function (args, optionsOrCb, cb) {
        var command = new DescribeBatchPredictionsCommand(args);
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
    MachineLearning.prototype.describeDataSources = function (args, optionsOrCb, cb) {
        var command = new DescribeDataSourcesCommand(args);
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
    MachineLearning.prototype.describeEvaluations = function (args, optionsOrCb, cb) {
        var command = new DescribeEvaluationsCommand(args);
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
    MachineLearning.prototype.describeMLModels = function (args, optionsOrCb, cb) {
        var command = new DescribeMLModelsCommand(args);
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
    MachineLearning.prototype.describeTags = function (args, optionsOrCb, cb) {
        var command = new DescribeTagsCommand(args);
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
    MachineLearning.prototype.getBatchPrediction = function (args, optionsOrCb, cb) {
        var command = new GetBatchPredictionCommand(args);
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
    MachineLearning.prototype.getDataSource = function (args, optionsOrCb, cb) {
        var command = new GetDataSourceCommand(args);
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
    MachineLearning.prototype.getEvaluation = function (args, optionsOrCb, cb) {
        var command = new GetEvaluationCommand(args);
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
    MachineLearning.prototype.getMLModel = function (args, optionsOrCb, cb) {
        var command = new GetMLModelCommand(args);
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
    MachineLearning.prototype.predict = function (args, optionsOrCb, cb) {
        var command = new PredictCommand(args);
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
    MachineLearning.prototype.updateBatchPrediction = function (args, optionsOrCb, cb) {
        var command = new UpdateBatchPredictionCommand(args);
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
    MachineLearning.prototype.updateDataSource = function (args, optionsOrCb, cb) {
        var command = new UpdateDataSourceCommand(args);
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
    MachineLearning.prototype.updateEvaluation = function (args, optionsOrCb, cb) {
        var command = new UpdateEvaluationCommand(args);
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
    MachineLearning.prototype.updateMLModel = function (args, optionsOrCb, cb) {
        var command = new UpdateMLModelCommand(args);
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
    return MachineLearning;
}(MachineLearningClient));
export { MachineLearning };
//# sourceMappingURL=MachineLearning.js.map