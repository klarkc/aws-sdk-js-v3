import { __extends } from "tslib";
import { AutoScalingClient } from "./AutoScalingClient";
import { AttachInstancesCommand } from "./commands/AttachInstancesCommand";
import { AttachLoadBalancerTargetGroupsCommand } from "./commands/AttachLoadBalancerTargetGroupsCommand";
import { AttachLoadBalancersCommand } from "./commands/AttachLoadBalancersCommand";
import { BatchDeleteScheduledActionCommand } from "./commands/BatchDeleteScheduledActionCommand";
import { BatchPutScheduledUpdateGroupActionCommand } from "./commands/BatchPutScheduledUpdateGroupActionCommand";
import { CancelInstanceRefreshCommand } from "./commands/CancelInstanceRefreshCommand";
import { CompleteLifecycleActionCommand } from "./commands/CompleteLifecycleActionCommand";
import { CreateAutoScalingGroupCommand } from "./commands/CreateAutoScalingGroupCommand";
import { CreateLaunchConfigurationCommand } from "./commands/CreateLaunchConfigurationCommand";
import { CreateOrUpdateTagsCommand } from "./commands/CreateOrUpdateTagsCommand";
import { DeleteAutoScalingGroupCommand } from "./commands/DeleteAutoScalingGroupCommand";
import { DeleteLaunchConfigurationCommand } from "./commands/DeleteLaunchConfigurationCommand";
import { DeleteLifecycleHookCommand } from "./commands/DeleteLifecycleHookCommand";
import { DeleteNotificationConfigurationCommand } from "./commands/DeleteNotificationConfigurationCommand";
import { DeletePolicyCommand } from "./commands/DeletePolicyCommand";
import { DeleteScheduledActionCommand } from "./commands/DeleteScheduledActionCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DeleteWarmPoolCommand } from "./commands/DeleteWarmPoolCommand";
import { DescribeAccountLimitsCommand } from "./commands/DescribeAccountLimitsCommand";
import { DescribeAdjustmentTypesCommand } from "./commands/DescribeAdjustmentTypesCommand";
import { DescribeAutoScalingGroupsCommand } from "./commands/DescribeAutoScalingGroupsCommand";
import { DescribeAutoScalingInstancesCommand } from "./commands/DescribeAutoScalingInstancesCommand";
import { DescribeAutoScalingNotificationTypesCommand } from "./commands/DescribeAutoScalingNotificationTypesCommand";
import { DescribeInstanceRefreshesCommand } from "./commands/DescribeInstanceRefreshesCommand";
import { DescribeLaunchConfigurationsCommand } from "./commands/DescribeLaunchConfigurationsCommand";
import { DescribeLifecycleHookTypesCommand } from "./commands/DescribeLifecycleHookTypesCommand";
import { DescribeLifecycleHooksCommand } from "./commands/DescribeLifecycleHooksCommand";
import { DescribeLoadBalancerTargetGroupsCommand } from "./commands/DescribeLoadBalancerTargetGroupsCommand";
import { DescribeLoadBalancersCommand } from "./commands/DescribeLoadBalancersCommand";
import { DescribeMetricCollectionTypesCommand } from "./commands/DescribeMetricCollectionTypesCommand";
import { DescribeNotificationConfigurationsCommand } from "./commands/DescribeNotificationConfigurationsCommand";
import { DescribePoliciesCommand } from "./commands/DescribePoliciesCommand";
import { DescribeScalingActivitiesCommand } from "./commands/DescribeScalingActivitiesCommand";
import { DescribeScalingProcessTypesCommand } from "./commands/DescribeScalingProcessTypesCommand";
import { DescribeScheduledActionsCommand } from "./commands/DescribeScheduledActionsCommand";
import { DescribeTagsCommand } from "./commands/DescribeTagsCommand";
import { DescribeTerminationPolicyTypesCommand } from "./commands/DescribeTerminationPolicyTypesCommand";
import { DescribeWarmPoolCommand } from "./commands/DescribeWarmPoolCommand";
import { DetachInstancesCommand } from "./commands/DetachInstancesCommand";
import { DetachLoadBalancerTargetGroupsCommand } from "./commands/DetachLoadBalancerTargetGroupsCommand";
import { DetachLoadBalancersCommand } from "./commands/DetachLoadBalancersCommand";
import { DisableMetricsCollectionCommand } from "./commands/DisableMetricsCollectionCommand";
import { EnableMetricsCollectionCommand } from "./commands/EnableMetricsCollectionCommand";
import { EnterStandbyCommand } from "./commands/EnterStandbyCommand";
import { ExecutePolicyCommand } from "./commands/ExecutePolicyCommand";
import { ExitStandbyCommand } from "./commands/ExitStandbyCommand";
import { GetPredictiveScalingForecastCommand } from "./commands/GetPredictiveScalingForecastCommand";
import { PutLifecycleHookCommand } from "./commands/PutLifecycleHookCommand";
import { PutNotificationConfigurationCommand } from "./commands/PutNotificationConfigurationCommand";
import { PutScalingPolicyCommand } from "./commands/PutScalingPolicyCommand";
import { PutScheduledUpdateGroupActionCommand } from "./commands/PutScheduledUpdateGroupActionCommand";
import { PutWarmPoolCommand } from "./commands/PutWarmPoolCommand";
import { RecordLifecycleActionHeartbeatCommand } from "./commands/RecordLifecycleActionHeartbeatCommand";
import { ResumeProcessesCommand } from "./commands/ResumeProcessesCommand";
import { SetDesiredCapacityCommand } from "./commands/SetDesiredCapacityCommand";
import { SetInstanceHealthCommand } from "./commands/SetInstanceHealthCommand";
import { SetInstanceProtectionCommand } from "./commands/SetInstanceProtectionCommand";
import { StartInstanceRefreshCommand } from "./commands/StartInstanceRefreshCommand";
import { SuspendProcessesCommand } from "./commands/SuspendProcessesCommand";
import { TerminateInstanceInAutoScalingGroupCommand } from "./commands/TerminateInstanceInAutoScalingGroupCommand";
import { UpdateAutoScalingGroupCommand } from "./commands/UpdateAutoScalingGroupCommand";
/**
 * <fullname>Amazon EC2 Auto Scaling</fullname>
 *
 *
 *
 *
 *
 *
 *         <p>Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances
 *             based on user-defined scaling policies, scheduled actions, and health checks.</p>
 *         <p>For more information about Amazon EC2 Auto Scaling, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a>. For information about granting IAM users required
 *             permissions for calls to Amazon EC2 Auto Scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/ec2-auto-scaling-api-permissions.html">Granting
 *                 IAM users required permissions for Amazon EC2 Auto Scaling resources</a> in the
 *                 <i>Amazon EC2 Auto Scaling API Reference</i>.</p>
 */
var AutoScaling = /** @class */ (function (_super) {
  __extends(AutoScaling, _super);
  function AutoScaling() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AutoScaling.prototype.attachInstances = function (args, optionsOrCb, cb) {
    var command = new AttachInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.attachLoadBalancers = function (args, optionsOrCb, cb) {
    var command = new AttachLoadBalancersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.attachLoadBalancerTargetGroups = function (args, optionsOrCb, cb) {
    var command = new AttachLoadBalancerTargetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.batchDeleteScheduledAction = function (args, optionsOrCb, cb) {
    var command = new BatchDeleteScheduledActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.batchPutScheduledUpdateGroupAction = function (args, optionsOrCb, cb) {
    var command = new BatchPutScheduledUpdateGroupActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.cancelInstanceRefresh = function (args, optionsOrCb, cb) {
    var command = new CancelInstanceRefreshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.completeLifecycleAction = function (args, optionsOrCb, cb) {
    var command = new CompleteLifecycleActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.createAutoScalingGroup = function (args, optionsOrCb, cb) {
    var command = new CreateAutoScalingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.createLaunchConfiguration = function (args, optionsOrCb, cb) {
    var command = new CreateLaunchConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.createOrUpdateTags = function (args, optionsOrCb, cb) {
    var command = new CreateOrUpdateTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.deleteAutoScalingGroup = function (args, optionsOrCb, cb) {
    var command = new DeleteAutoScalingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.deleteLaunchConfiguration = function (args, optionsOrCb, cb) {
    var command = new DeleteLaunchConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.deleteLifecycleHook = function (args, optionsOrCb, cb) {
    var command = new DeleteLifecycleHookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.deleteNotificationConfiguration = function (args, optionsOrCb, cb) {
    var command = new DeleteNotificationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.deletePolicy = function (args, optionsOrCb, cb) {
    var command = new DeletePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.deleteScheduledAction = function (args, optionsOrCb, cb) {
    var command = new DeleteScheduledActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.deleteTags = function (args, optionsOrCb, cb) {
    var command = new DeleteTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.deleteWarmPool = function (args, optionsOrCb, cb) {
    var command = new DeleteWarmPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeAccountLimits = function (args, optionsOrCb, cb) {
    var command = new DescribeAccountLimitsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeAdjustmentTypes = function (args, optionsOrCb, cb) {
    var command = new DescribeAdjustmentTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeAutoScalingGroups = function (args, optionsOrCb, cb) {
    var command = new DescribeAutoScalingGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeAutoScalingInstances = function (args, optionsOrCb, cb) {
    var command = new DescribeAutoScalingInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeAutoScalingNotificationTypes = function (args, optionsOrCb, cb) {
    var command = new DescribeAutoScalingNotificationTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeInstanceRefreshes = function (args, optionsOrCb, cb) {
    var command = new DescribeInstanceRefreshesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeLaunchConfigurations = function (args, optionsOrCb, cb) {
    var command = new DescribeLaunchConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeLifecycleHooks = function (args, optionsOrCb, cb) {
    var command = new DescribeLifecycleHooksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeLifecycleHookTypes = function (args, optionsOrCb, cb) {
    var command = new DescribeLifecycleHookTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeLoadBalancers = function (args, optionsOrCb, cb) {
    var command = new DescribeLoadBalancersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeLoadBalancerTargetGroups = function (args, optionsOrCb, cb) {
    var command = new DescribeLoadBalancerTargetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeMetricCollectionTypes = function (args, optionsOrCb, cb) {
    var command = new DescribeMetricCollectionTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeNotificationConfigurations = function (args, optionsOrCb, cb) {
    var command = new DescribeNotificationConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describePolicies = function (args, optionsOrCb, cb) {
    var command = new DescribePoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeScalingActivities = function (args, optionsOrCb, cb) {
    var command = new DescribeScalingActivitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeScalingProcessTypes = function (args, optionsOrCb, cb) {
    var command = new DescribeScalingProcessTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeScheduledActions = function (args, optionsOrCb, cb) {
    var command = new DescribeScheduledActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeTags = function (args, optionsOrCb, cb) {
    var command = new DescribeTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeTerminationPolicyTypes = function (args, optionsOrCb, cb) {
    var command = new DescribeTerminationPolicyTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.describeWarmPool = function (args, optionsOrCb, cb) {
    var command = new DescribeWarmPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.detachInstances = function (args, optionsOrCb, cb) {
    var command = new DetachInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.detachLoadBalancers = function (args, optionsOrCb, cb) {
    var command = new DetachLoadBalancersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.detachLoadBalancerTargetGroups = function (args, optionsOrCb, cb) {
    var command = new DetachLoadBalancerTargetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.disableMetricsCollection = function (args, optionsOrCb, cb) {
    var command = new DisableMetricsCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.enableMetricsCollection = function (args, optionsOrCb, cb) {
    var command = new EnableMetricsCollectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.enterStandby = function (args, optionsOrCb, cb) {
    var command = new EnterStandbyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.executePolicy = function (args, optionsOrCb, cb) {
    var command = new ExecutePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.exitStandby = function (args, optionsOrCb, cb) {
    var command = new ExitStandbyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.getPredictiveScalingForecast = function (args, optionsOrCb, cb) {
    var command = new GetPredictiveScalingForecastCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.putLifecycleHook = function (args, optionsOrCb, cb) {
    var command = new PutLifecycleHookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.putNotificationConfiguration = function (args, optionsOrCb, cb) {
    var command = new PutNotificationConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.putScalingPolicy = function (args, optionsOrCb, cb) {
    var command = new PutScalingPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.putScheduledUpdateGroupAction = function (args, optionsOrCb, cb) {
    var command = new PutScheduledUpdateGroupActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.putWarmPool = function (args, optionsOrCb, cb) {
    var command = new PutWarmPoolCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.recordLifecycleActionHeartbeat = function (args, optionsOrCb, cb) {
    var command = new RecordLifecycleActionHeartbeatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.resumeProcesses = function (args, optionsOrCb, cb) {
    var command = new ResumeProcessesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.setDesiredCapacity = function (args, optionsOrCb, cb) {
    var command = new SetDesiredCapacityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.setInstanceHealth = function (args, optionsOrCb, cb) {
    var command = new SetInstanceHealthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.setInstanceProtection = function (args, optionsOrCb, cb) {
    var command = new SetInstanceProtectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.startInstanceRefresh = function (args, optionsOrCb, cb) {
    var command = new StartInstanceRefreshCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.suspendProcesses = function (args, optionsOrCb, cb) {
    var command = new SuspendProcessesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.terminateInstanceInAutoScalingGroup = function (args, optionsOrCb, cb) {
    var command = new TerminateInstanceInAutoScalingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AutoScaling.prototype.updateAutoScalingGroup = function (args, optionsOrCb, cb) {
    var command = new UpdateAutoScalingGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return AutoScaling;
})(AutoScalingClient);
export { AutoScaling };
//# sourceMappingURL=AutoScaling.js.map
