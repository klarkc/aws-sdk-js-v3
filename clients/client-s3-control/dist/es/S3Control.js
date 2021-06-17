import { __extends } from "tslib";
import { S3ControlClient } from "./S3ControlClient";
import { CreateAccessPointCommand, } from "./commands/CreateAccessPointCommand";
import { CreateAccessPointForObjectLambdaCommand, } from "./commands/CreateAccessPointForObjectLambdaCommand";
import { CreateBucketCommand, } from "./commands/CreateBucketCommand";
import { CreateJobCommand } from "./commands/CreateJobCommand";
import { DeleteAccessPointCommand, } from "./commands/DeleteAccessPointCommand";
import { DeleteAccessPointForObjectLambdaCommand, } from "./commands/DeleteAccessPointForObjectLambdaCommand";
import { DeleteAccessPointPolicyCommand, } from "./commands/DeleteAccessPointPolicyCommand";
import { DeleteAccessPointPolicyForObjectLambdaCommand, } from "./commands/DeleteAccessPointPolicyForObjectLambdaCommand";
import { DeleteBucketCommand, } from "./commands/DeleteBucketCommand";
import { DeleteBucketLifecycleConfigurationCommand, } from "./commands/DeleteBucketLifecycleConfigurationCommand";
import { DeleteBucketPolicyCommand, } from "./commands/DeleteBucketPolicyCommand";
import { DeleteBucketTaggingCommand, } from "./commands/DeleteBucketTaggingCommand";
import { DeleteJobTaggingCommand, } from "./commands/DeleteJobTaggingCommand";
import { DeletePublicAccessBlockCommand, } from "./commands/DeletePublicAccessBlockCommand";
import { DeleteStorageLensConfigurationCommand, } from "./commands/DeleteStorageLensConfigurationCommand";
import { DeleteStorageLensConfigurationTaggingCommand, } from "./commands/DeleteStorageLensConfigurationTaggingCommand";
import { DescribeJobCommand } from "./commands/DescribeJobCommand";
import { GetAccessPointCommand, } from "./commands/GetAccessPointCommand";
import { GetAccessPointConfigurationForObjectLambdaCommand, } from "./commands/GetAccessPointConfigurationForObjectLambdaCommand";
import { GetAccessPointForObjectLambdaCommand, } from "./commands/GetAccessPointForObjectLambdaCommand";
import { GetAccessPointPolicyCommand, } from "./commands/GetAccessPointPolicyCommand";
import { GetAccessPointPolicyForObjectLambdaCommand, } from "./commands/GetAccessPointPolicyForObjectLambdaCommand";
import { GetAccessPointPolicyStatusCommand, } from "./commands/GetAccessPointPolicyStatusCommand";
import { GetAccessPointPolicyStatusForObjectLambdaCommand, } from "./commands/GetAccessPointPolicyStatusForObjectLambdaCommand";
import { GetBucketCommand } from "./commands/GetBucketCommand";
import { GetBucketLifecycleConfigurationCommand, } from "./commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketPolicyCommand, } from "./commands/GetBucketPolicyCommand";
import { GetBucketTaggingCommand, } from "./commands/GetBucketTaggingCommand";
import { GetJobTaggingCommand, } from "./commands/GetJobTaggingCommand";
import { GetPublicAccessBlockCommand, } from "./commands/GetPublicAccessBlockCommand";
import { GetStorageLensConfigurationCommand, } from "./commands/GetStorageLensConfigurationCommand";
import { GetStorageLensConfigurationTaggingCommand, } from "./commands/GetStorageLensConfigurationTaggingCommand";
import { ListAccessPointsCommand, } from "./commands/ListAccessPointsCommand";
import { ListAccessPointsForObjectLambdaCommand, } from "./commands/ListAccessPointsForObjectLambdaCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { ListRegionalBucketsCommand, } from "./commands/ListRegionalBucketsCommand";
import { ListStorageLensConfigurationsCommand, } from "./commands/ListStorageLensConfigurationsCommand";
import { PutAccessPointConfigurationForObjectLambdaCommand, } from "./commands/PutAccessPointConfigurationForObjectLambdaCommand";
import { PutAccessPointPolicyCommand, } from "./commands/PutAccessPointPolicyCommand";
import { PutAccessPointPolicyForObjectLambdaCommand, } from "./commands/PutAccessPointPolicyForObjectLambdaCommand";
import { PutBucketLifecycleConfigurationCommand, } from "./commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketPolicyCommand, } from "./commands/PutBucketPolicyCommand";
import { PutBucketTaggingCommand, } from "./commands/PutBucketTaggingCommand";
import { PutJobTaggingCommand, } from "./commands/PutJobTaggingCommand";
import { PutPublicAccessBlockCommand, } from "./commands/PutPublicAccessBlockCommand";
import { PutStorageLensConfigurationCommand, } from "./commands/PutStorageLensConfigurationCommand";
import { PutStorageLensConfigurationTaggingCommand, } from "./commands/PutStorageLensConfigurationTaggingCommand";
import { UpdateJobPriorityCommand, } from "./commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommand, } from "./commands/UpdateJobStatusCommand";
/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane actions.
 *
 *       </p>
 */
var S3Control = /** @class */ (function (_super) {
    __extends(S3Control, _super);
    function S3Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    S3Control.prototype.createAccessPoint = function (args, optionsOrCb, cb) {
        var command = new CreateAccessPointCommand(args);
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
    S3Control.prototype.createAccessPointForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new CreateAccessPointForObjectLambdaCommand(args);
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
    S3Control.prototype.createBucket = function (args, optionsOrCb, cb) {
        var command = new CreateBucketCommand(args);
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
    S3Control.prototype.createJob = function (args, optionsOrCb, cb) {
        var command = new CreateJobCommand(args);
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
    S3Control.prototype.deleteAccessPoint = function (args, optionsOrCb, cb) {
        var command = new DeleteAccessPointCommand(args);
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
    S3Control.prototype.deleteAccessPointForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new DeleteAccessPointForObjectLambdaCommand(args);
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
    S3Control.prototype.deleteAccessPointPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteAccessPointPolicyCommand(args);
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
    S3Control.prototype.deleteAccessPointPolicyForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new DeleteAccessPointPolicyForObjectLambdaCommand(args);
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
    S3Control.prototype.deleteBucket = function (args, optionsOrCb, cb) {
        var command = new DeleteBucketCommand(args);
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
    S3Control.prototype.deleteBucketLifecycleConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteBucketLifecycleConfigurationCommand(args);
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
    S3Control.prototype.deleteBucketPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteBucketPolicyCommand(args);
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
    S3Control.prototype.deleteBucketTagging = function (args, optionsOrCb, cb) {
        var command = new DeleteBucketTaggingCommand(args);
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
    S3Control.prototype.deleteJobTagging = function (args, optionsOrCb, cb) {
        var command = new DeleteJobTaggingCommand(args);
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
    S3Control.prototype.deletePublicAccessBlock = function (args, optionsOrCb, cb) {
        var command = new DeletePublicAccessBlockCommand(args);
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
    S3Control.prototype.deleteStorageLensConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteStorageLensConfigurationCommand(args);
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
    S3Control.prototype.deleteStorageLensConfigurationTagging = function (args, optionsOrCb, cb) {
        var command = new DeleteStorageLensConfigurationTaggingCommand(args);
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
    S3Control.prototype.describeJob = function (args, optionsOrCb, cb) {
        var command = new DescribeJobCommand(args);
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
    S3Control.prototype.getAccessPoint = function (args, optionsOrCb, cb) {
        var command = new GetAccessPointCommand(args);
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
    S3Control.prototype.getAccessPointConfigurationForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new GetAccessPointConfigurationForObjectLambdaCommand(args);
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
    S3Control.prototype.getAccessPointForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new GetAccessPointForObjectLambdaCommand(args);
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
    S3Control.prototype.getAccessPointPolicy = function (args, optionsOrCb, cb) {
        var command = new GetAccessPointPolicyCommand(args);
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
    S3Control.prototype.getAccessPointPolicyForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new GetAccessPointPolicyForObjectLambdaCommand(args);
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
    S3Control.prototype.getAccessPointPolicyStatus = function (args, optionsOrCb, cb) {
        var command = new GetAccessPointPolicyStatusCommand(args);
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
    S3Control.prototype.getAccessPointPolicyStatusForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new GetAccessPointPolicyStatusForObjectLambdaCommand(args);
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
    S3Control.prototype.getBucket = function (args, optionsOrCb, cb) {
        var command = new GetBucketCommand(args);
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
    S3Control.prototype.getBucketLifecycleConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetBucketLifecycleConfigurationCommand(args);
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
    S3Control.prototype.getBucketPolicy = function (args, optionsOrCb, cb) {
        var command = new GetBucketPolicyCommand(args);
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
    S3Control.prototype.getBucketTagging = function (args, optionsOrCb, cb) {
        var command = new GetBucketTaggingCommand(args);
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
    S3Control.prototype.getJobTagging = function (args, optionsOrCb, cb) {
        var command = new GetJobTaggingCommand(args);
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
    S3Control.prototype.getPublicAccessBlock = function (args, optionsOrCb, cb) {
        var command = new GetPublicAccessBlockCommand(args);
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
    S3Control.prototype.getStorageLensConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetStorageLensConfigurationCommand(args);
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
    S3Control.prototype.getStorageLensConfigurationTagging = function (args, optionsOrCb, cb) {
        var command = new GetStorageLensConfigurationTaggingCommand(args);
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
    S3Control.prototype.listAccessPoints = function (args, optionsOrCb, cb) {
        var command = new ListAccessPointsCommand(args);
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
    S3Control.prototype.listAccessPointsForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new ListAccessPointsForObjectLambdaCommand(args);
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
    S3Control.prototype.listJobs = function (args, optionsOrCb, cb) {
        var command = new ListJobsCommand(args);
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
    S3Control.prototype.listRegionalBuckets = function (args, optionsOrCb, cb) {
        var command = new ListRegionalBucketsCommand(args);
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
    S3Control.prototype.listStorageLensConfigurations = function (args, optionsOrCb, cb) {
        var command = new ListStorageLensConfigurationsCommand(args);
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
    S3Control.prototype.putAccessPointConfigurationForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new PutAccessPointConfigurationForObjectLambdaCommand(args);
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
    S3Control.prototype.putAccessPointPolicy = function (args, optionsOrCb, cb) {
        var command = new PutAccessPointPolicyCommand(args);
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
    S3Control.prototype.putAccessPointPolicyForObjectLambda = function (args, optionsOrCb, cb) {
        var command = new PutAccessPointPolicyForObjectLambdaCommand(args);
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
    S3Control.prototype.putBucketLifecycleConfiguration = function (args, optionsOrCb, cb) {
        var command = new PutBucketLifecycleConfigurationCommand(args);
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
    S3Control.prototype.putBucketPolicy = function (args, optionsOrCb, cb) {
        var command = new PutBucketPolicyCommand(args);
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
    S3Control.prototype.putBucketTagging = function (args, optionsOrCb, cb) {
        var command = new PutBucketTaggingCommand(args);
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
    S3Control.prototype.putJobTagging = function (args, optionsOrCb, cb) {
        var command = new PutJobTaggingCommand(args);
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
    S3Control.prototype.putPublicAccessBlock = function (args, optionsOrCb, cb) {
        var command = new PutPublicAccessBlockCommand(args);
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
    S3Control.prototype.putStorageLensConfiguration = function (args, optionsOrCb, cb) {
        var command = new PutStorageLensConfigurationCommand(args);
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
    S3Control.prototype.putStorageLensConfigurationTagging = function (args, optionsOrCb, cb) {
        var command = new PutStorageLensConfigurationTaggingCommand(args);
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
    S3Control.prototype.updateJobPriority = function (args, optionsOrCb, cb) {
        var command = new UpdateJobPriorityCommand(args);
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
    S3Control.prototype.updateJobStatus = function (args, optionsOrCb, cb) {
        var command = new UpdateJobStatusCommand(args);
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
    return S3Control;
}(S3ControlClient));
export { S3Control };
//# sourceMappingURL=S3Control.js.map