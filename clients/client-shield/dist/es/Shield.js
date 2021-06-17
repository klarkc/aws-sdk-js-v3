import { __extends } from "tslib";
import { ShieldClient } from "./ShieldClient";
import { AssociateDRTLogBucketCommand, } from "./commands/AssociateDRTLogBucketCommand";
import { AssociateDRTRoleCommand, } from "./commands/AssociateDRTRoleCommand";
import { AssociateHealthCheckCommand, } from "./commands/AssociateHealthCheckCommand";
import { AssociateProactiveEngagementDetailsCommand, } from "./commands/AssociateProactiveEngagementDetailsCommand";
import { CreateProtectionCommand, } from "./commands/CreateProtectionCommand";
import { CreateProtectionGroupCommand, } from "./commands/CreateProtectionGroupCommand";
import { CreateSubscriptionCommand, } from "./commands/CreateSubscriptionCommand";
import { DeleteProtectionCommand, } from "./commands/DeleteProtectionCommand";
import { DeleteProtectionGroupCommand, } from "./commands/DeleteProtectionGroupCommand";
import { DeleteSubscriptionCommand, } from "./commands/DeleteSubscriptionCommand";
import { DescribeAttackCommand, } from "./commands/DescribeAttackCommand";
import { DescribeAttackStatisticsCommand, } from "./commands/DescribeAttackStatisticsCommand";
import { DescribeDRTAccessCommand, } from "./commands/DescribeDRTAccessCommand";
import { DescribeEmergencyContactSettingsCommand, } from "./commands/DescribeEmergencyContactSettingsCommand";
import { DescribeProtectionCommand, } from "./commands/DescribeProtectionCommand";
import { DescribeProtectionGroupCommand, } from "./commands/DescribeProtectionGroupCommand";
import { DescribeSubscriptionCommand, } from "./commands/DescribeSubscriptionCommand";
import { DisableProactiveEngagementCommand, } from "./commands/DisableProactiveEngagementCommand";
import { DisassociateDRTLogBucketCommand, } from "./commands/DisassociateDRTLogBucketCommand";
import { DisassociateDRTRoleCommand, } from "./commands/DisassociateDRTRoleCommand";
import { DisassociateHealthCheckCommand, } from "./commands/DisassociateHealthCheckCommand";
import { EnableProactiveEngagementCommand, } from "./commands/EnableProactiveEngagementCommand";
import { GetSubscriptionStateCommand, } from "./commands/GetSubscriptionStateCommand";
import { ListAttacksCommand } from "./commands/ListAttacksCommand";
import { ListProtectionGroupsCommand, } from "./commands/ListProtectionGroupsCommand";
import { ListProtectionsCommand, } from "./commands/ListProtectionsCommand";
import { ListResourcesInProtectionGroupCommand, } from "./commands/ListResourcesInProtectionGroupCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateEmergencyContactSettingsCommand, } from "./commands/UpdateEmergencyContactSettingsCommand";
import { UpdateProtectionGroupCommand, } from "./commands/UpdateProtectionGroupCommand";
import { UpdateSubscriptionCommand, } from "./commands/UpdateSubscriptionCommand";
/**
 * <fullname>AWS Shield Advanced</fullname>
 *          <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions,
 *          data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>
 */
var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shield.prototype.associateDRTLogBucket = function (args, optionsOrCb, cb) {
        var command = new AssociateDRTLogBucketCommand(args);
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
    Shield.prototype.associateDRTRole = function (args, optionsOrCb, cb) {
        var command = new AssociateDRTRoleCommand(args);
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
    Shield.prototype.associateHealthCheck = function (args, optionsOrCb, cb) {
        var command = new AssociateHealthCheckCommand(args);
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
    Shield.prototype.associateProactiveEngagementDetails = function (args, optionsOrCb, cb) {
        var command = new AssociateProactiveEngagementDetailsCommand(args);
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
    Shield.prototype.createProtection = function (args, optionsOrCb, cb) {
        var command = new CreateProtectionCommand(args);
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
    Shield.prototype.createProtectionGroup = function (args, optionsOrCb, cb) {
        var command = new CreateProtectionGroupCommand(args);
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
    Shield.prototype.createSubscription = function (args, optionsOrCb, cb) {
        var command = new CreateSubscriptionCommand(args);
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
    Shield.prototype.deleteProtection = function (args, optionsOrCb, cb) {
        var command = new DeleteProtectionCommand(args);
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
    Shield.prototype.deleteProtectionGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteProtectionGroupCommand(args);
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
    Shield.prototype.deleteSubscription = function (args, optionsOrCb, cb) {
        var command = new DeleteSubscriptionCommand(args);
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
    Shield.prototype.describeAttack = function (args, optionsOrCb, cb) {
        var command = new DescribeAttackCommand(args);
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
    Shield.prototype.describeAttackStatistics = function (args, optionsOrCb, cb) {
        var command = new DescribeAttackStatisticsCommand(args);
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
    Shield.prototype.describeDRTAccess = function (args, optionsOrCb, cb) {
        var command = new DescribeDRTAccessCommand(args);
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
    Shield.prototype.describeEmergencyContactSettings = function (args, optionsOrCb, cb) {
        var command = new DescribeEmergencyContactSettingsCommand(args);
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
    Shield.prototype.describeProtection = function (args, optionsOrCb, cb) {
        var command = new DescribeProtectionCommand(args);
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
    Shield.prototype.describeProtectionGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeProtectionGroupCommand(args);
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
    Shield.prototype.describeSubscription = function (args, optionsOrCb, cb) {
        var command = new DescribeSubscriptionCommand(args);
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
    Shield.prototype.disableProactiveEngagement = function (args, optionsOrCb, cb) {
        var command = new DisableProactiveEngagementCommand(args);
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
    Shield.prototype.disassociateDRTLogBucket = function (args, optionsOrCb, cb) {
        var command = new DisassociateDRTLogBucketCommand(args);
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
    Shield.prototype.disassociateDRTRole = function (args, optionsOrCb, cb) {
        var command = new DisassociateDRTRoleCommand(args);
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
    Shield.prototype.disassociateHealthCheck = function (args, optionsOrCb, cb) {
        var command = new DisassociateHealthCheckCommand(args);
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
    Shield.prototype.enableProactiveEngagement = function (args, optionsOrCb, cb) {
        var command = new EnableProactiveEngagementCommand(args);
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
    Shield.prototype.getSubscriptionState = function (args, optionsOrCb, cb) {
        var command = new GetSubscriptionStateCommand(args);
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
    Shield.prototype.listAttacks = function (args, optionsOrCb, cb) {
        var command = new ListAttacksCommand(args);
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
    Shield.prototype.listProtectionGroups = function (args, optionsOrCb, cb) {
        var command = new ListProtectionGroupsCommand(args);
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
    Shield.prototype.listProtections = function (args, optionsOrCb, cb) {
        var command = new ListProtectionsCommand(args);
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
    Shield.prototype.listResourcesInProtectionGroup = function (args, optionsOrCb, cb) {
        var command = new ListResourcesInProtectionGroupCommand(args);
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
    Shield.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    Shield.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    Shield.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    Shield.prototype.updateEmergencyContactSettings = function (args, optionsOrCb, cb) {
        var command = new UpdateEmergencyContactSettingsCommand(args);
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
    Shield.prototype.updateProtectionGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateProtectionGroupCommand(args);
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
    Shield.prototype.updateSubscription = function (args, optionsOrCb, cb) {
        var command = new UpdateSubscriptionCommand(args);
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
    return Shield;
}(ShieldClient));
export { Shield };
//# sourceMappingURL=Shield.js.map