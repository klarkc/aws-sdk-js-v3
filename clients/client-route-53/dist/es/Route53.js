import { __extends } from "tslib";
import { Route53Client } from "./Route53Client";
import { ActivateKeySigningKeyCommand, } from "./commands/ActivateKeySigningKeyCommand";
import { AssociateVPCWithHostedZoneCommand, } from "./commands/AssociateVPCWithHostedZoneCommand";
import { ChangeResourceRecordSetsCommand, } from "./commands/ChangeResourceRecordSetsCommand";
import { ChangeTagsForResourceCommand, } from "./commands/ChangeTagsForResourceCommand";
import { CreateHealthCheckCommand, } from "./commands/CreateHealthCheckCommand";
import { CreateHostedZoneCommand, } from "./commands/CreateHostedZoneCommand";
import { CreateKeySigningKeyCommand, } from "./commands/CreateKeySigningKeyCommand";
import { CreateQueryLoggingConfigCommand, } from "./commands/CreateQueryLoggingConfigCommand";
import { CreateReusableDelegationSetCommand, } from "./commands/CreateReusableDelegationSetCommand";
import { CreateTrafficPolicyCommand, } from "./commands/CreateTrafficPolicyCommand";
import { CreateTrafficPolicyInstanceCommand, } from "./commands/CreateTrafficPolicyInstanceCommand";
import { CreateTrafficPolicyVersionCommand, } from "./commands/CreateTrafficPolicyVersionCommand";
import { CreateVPCAssociationAuthorizationCommand, } from "./commands/CreateVPCAssociationAuthorizationCommand";
import { DeactivateKeySigningKeyCommand, } from "./commands/DeactivateKeySigningKeyCommand";
import { DeleteHealthCheckCommand, } from "./commands/DeleteHealthCheckCommand";
import { DeleteHostedZoneCommand, } from "./commands/DeleteHostedZoneCommand";
import { DeleteKeySigningKeyCommand, } from "./commands/DeleteKeySigningKeyCommand";
import { DeleteQueryLoggingConfigCommand, } from "./commands/DeleteQueryLoggingConfigCommand";
import { DeleteReusableDelegationSetCommand, } from "./commands/DeleteReusableDelegationSetCommand";
import { DeleteTrafficPolicyCommand, } from "./commands/DeleteTrafficPolicyCommand";
import { DeleteTrafficPolicyInstanceCommand, } from "./commands/DeleteTrafficPolicyInstanceCommand";
import { DeleteVPCAssociationAuthorizationCommand, } from "./commands/DeleteVPCAssociationAuthorizationCommand";
import { DisableHostedZoneDNSSECCommand, } from "./commands/DisableHostedZoneDNSSECCommand";
import { DisassociateVPCFromHostedZoneCommand, } from "./commands/DisassociateVPCFromHostedZoneCommand";
import { EnableHostedZoneDNSSECCommand, } from "./commands/EnableHostedZoneDNSSECCommand";
import { GetAccountLimitCommand, } from "./commands/GetAccountLimitCommand";
import { GetChangeCommand } from "./commands/GetChangeCommand";
import { GetCheckerIpRangesCommand, } from "./commands/GetCheckerIpRangesCommand";
import { GetDNSSECCommand } from "./commands/GetDNSSECCommand";
import { GetGeoLocationCommand, } from "./commands/GetGeoLocationCommand";
import { GetHealthCheckCommand, } from "./commands/GetHealthCheckCommand";
import { GetHealthCheckCountCommand, } from "./commands/GetHealthCheckCountCommand";
import { GetHealthCheckLastFailureReasonCommand, } from "./commands/GetHealthCheckLastFailureReasonCommand";
import { GetHealthCheckStatusCommand, } from "./commands/GetHealthCheckStatusCommand";
import { GetHostedZoneCommand, } from "./commands/GetHostedZoneCommand";
import { GetHostedZoneCountCommand, } from "./commands/GetHostedZoneCountCommand";
import { GetHostedZoneLimitCommand, } from "./commands/GetHostedZoneLimitCommand";
import { GetQueryLoggingConfigCommand, } from "./commands/GetQueryLoggingConfigCommand";
import { GetReusableDelegationSetCommand, } from "./commands/GetReusableDelegationSetCommand";
import { GetReusableDelegationSetLimitCommand, } from "./commands/GetReusableDelegationSetLimitCommand";
import { GetTrafficPolicyCommand, } from "./commands/GetTrafficPolicyCommand";
import { GetTrafficPolicyInstanceCommand, } from "./commands/GetTrafficPolicyInstanceCommand";
import { GetTrafficPolicyInstanceCountCommand, } from "./commands/GetTrafficPolicyInstanceCountCommand";
import { ListGeoLocationsCommand, } from "./commands/ListGeoLocationsCommand";
import { ListHealthChecksCommand, } from "./commands/ListHealthChecksCommand";
import { ListHostedZonesByNameCommand, } from "./commands/ListHostedZonesByNameCommand";
import { ListHostedZonesByVPCCommand, } from "./commands/ListHostedZonesByVPCCommand";
import { ListHostedZonesCommand, } from "./commands/ListHostedZonesCommand";
import { ListQueryLoggingConfigsCommand, } from "./commands/ListQueryLoggingConfigsCommand";
import { ListResourceRecordSetsCommand, } from "./commands/ListResourceRecordSetsCommand";
import { ListReusableDelegationSetsCommand, } from "./commands/ListReusableDelegationSetsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTagsForResourcesCommand, } from "./commands/ListTagsForResourcesCommand";
import { ListTrafficPoliciesCommand, } from "./commands/ListTrafficPoliciesCommand";
import { ListTrafficPolicyInstancesByHostedZoneCommand, } from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import { ListTrafficPolicyInstancesByPolicyCommand, } from "./commands/ListTrafficPolicyInstancesByPolicyCommand";
import { ListTrafficPolicyInstancesCommand, } from "./commands/ListTrafficPolicyInstancesCommand";
import { ListTrafficPolicyVersionsCommand, } from "./commands/ListTrafficPolicyVersionsCommand";
import { ListVPCAssociationAuthorizationsCommand, } from "./commands/ListVPCAssociationAuthorizationsCommand";
import { TestDNSAnswerCommand, } from "./commands/TestDNSAnswerCommand";
import { UpdateHealthCheckCommand, } from "./commands/UpdateHealthCheckCommand";
import { UpdateHostedZoneCommentCommand, } from "./commands/UpdateHostedZoneCommentCommand";
import { UpdateTrafficPolicyCommentCommand, } from "./commands/UpdateTrafficPolicyCommentCommand";
import { UpdateTrafficPolicyInstanceCommand, } from "./commands/UpdateTrafficPolicyInstanceCommand";
/**
 * <p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.</p>
 */
var Route53 = /** @class */ (function (_super) {
    __extends(Route53, _super);
    function Route53() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Route53.prototype.activateKeySigningKey = function (args, optionsOrCb, cb) {
        var command = new ActivateKeySigningKeyCommand(args);
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
    Route53.prototype.associateVPCWithHostedZone = function (args, optionsOrCb, cb) {
        var command = new AssociateVPCWithHostedZoneCommand(args);
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
    Route53.prototype.changeResourceRecordSets = function (args, optionsOrCb, cb) {
        var command = new ChangeResourceRecordSetsCommand(args);
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
    Route53.prototype.changeTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ChangeTagsForResourceCommand(args);
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
    Route53.prototype.createHealthCheck = function (args, optionsOrCb, cb) {
        var command = new CreateHealthCheckCommand(args);
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
    Route53.prototype.createHostedZone = function (args, optionsOrCb, cb) {
        var command = new CreateHostedZoneCommand(args);
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
    Route53.prototype.createKeySigningKey = function (args, optionsOrCb, cb) {
        var command = new CreateKeySigningKeyCommand(args);
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
    Route53.prototype.createQueryLoggingConfig = function (args, optionsOrCb, cb) {
        var command = new CreateQueryLoggingConfigCommand(args);
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
    Route53.prototype.createReusableDelegationSet = function (args, optionsOrCb, cb) {
        var command = new CreateReusableDelegationSetCommand(args);
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
    Route53.prototype.createTrafficPolicy = function (args, optionsOrCb, cb) {
        var command = new CreateTrafficPolicyCommand(args);
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
    Route53.prototype.createTrafficPolicyInstance = function (args, optionsOrCb, cb) {
        var command = new CreateTrafficPolicyInstanceCommand(args);
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
    Route53.prototype.createTrafficPolicyVersion = function (args, optionsOrCb, cb) {
        var command = new CreateTrafficPolicyVersionCommand(args);
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
    Route53.prototype.createVPCAssociationAuthorization = function (args, optionsOrCb, cb) {
        var command = new CreateVPCAssociationAuthorizationCommand(args);
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
    Route53.prototype.deactivateKeySigningKey = function (args, optionsOrCb, cb) {
        var command = new DeactivateKeySigningKeyCommand(args);
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
    Route53.prototype.deleteHealthCheck = function (args, optionsOrCb, cb) {
        var command = new DeleteHealthCheckCommand(args);
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
    Route53.prototype.deleteHostedZone = function (args, optionsOrCb, cb) {
        var command = new DeleteHostedZoneCommand(args);
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
    Route53.prototype.deleteKeySigningKey = function (args, optionsOrCb, cb) {
        var command = new DeleteKeySigningKeyCommand(args);
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
    Route53.prototype.deleteQueryLoggingConfig = function (args, optionsOrCb, cb) {
        var command = new DeleteQueryLoggingConfigCommand(args);
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
    Route53.prototype.deleteReusableDelegationSet = function (args, optionsOrCb, cb) {
        var command = new DeleteReusableDelegationSetCommand(args);
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
    Route53.prototype.deleteTrafficPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteTrafficPolicyCommand(args);
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
    Route53.prototype.deleteTrafficPolicyInstance = function (args, optionsOrCb, cb) {
        var command = new DeleteTrafficPolicyInstanceCommand(args);
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
    Route53.prototype.deleteVPCAssociationAuthorization = function (args, optionsOrCb, cb) {
        var command = new DeleteVPCAssociationAuthorizationCommand(args);
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
    Route53.prototype.disableHostedZoneDNSSEC = function (args, optionsOrCb, cb) {
        var command = new DisableHostedZoneDNSSECCommand(args);
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
    Route53.prototype.disassociateVPCFromHostedZone = function (args, optionsOrCb, cb) {
        var command = new DisassociateVPCFromHostedZoneCommand(args);
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
    Route53.prototype.enableHostedZoneDNSSEC = function (args, optionsOrCb, cb) {
        var command = new EnableHostedZoneDNSSECCommand(args);
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
    Route53.prototype.getAccountLimit = function (args, optionsOrCb, cb) {
        var command = new GetAccountLimitCommand(args);
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
    Route53.prototype.getChange = function (args, optionsOrCb, cb) {
        var command = new GetChangeCommand(args);
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
    Route53.prototype.getCheckerIpRanges = function (args, optionsOrCb, cb) {
        var command = new GetCheckerIpRangesCommand(args);
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
    Route53.prototype.getDNSSEC = function (args, optionsOrCb, cb) {
        var command = new GetDNSSECCommand(args);
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
    Route53.prototype.getGeoLocation = function (args, optionsOrCb, cb) {
        var command = new GetGeoLocationCommand(args);
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
    Route53.prototype.getHealthCheck = function (args, optionsOrCb, cb) {
        var command = new GetHealthCheckCommand(args);
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
    Route53.prototype.getHealthCheckCount = function (args, optionsOrCb, cb) {
        var command = new GetHealthCheckCountCommand(args);
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
    Route53.prototype.getHealthCheckLastFailureReason = function (args, optionsOrCb, cb) {
        var command = new GetHealthCheckLastFailureReasonCommand(args);
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
    Route53.prototype.getHealthCheckStatus = function (args, optionsOrCb, cb) {
        var command = new GetHealthCheckStatusCommand(args);
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
    Route53.prototype.getHostedZone = function (args, optionsOrCb, cb) {
        var command = new GetHostedZoneCommand(args);
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
    Route53.prototype.getHostedZoneCount = function (args, optionsOrCb, cb) {
        var command = new GetHostedZoneCountCommand(args);
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
    Route53.prototype.getHostedZoneLimit = function (args, optionsOrCb, cb) {
        var command = new GetHostedZoneLimitCommand(args);
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
    Route53.prototype.getQueryLoggingConfig = function (args, optionsOrCb, cb) {
        var command = new GetQueryLoggingConfigCommand(args);
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
    Route53.prototype.getReusableDelegationSet = function (args, optionsOrCb, cb) {
        var command = new GetReusableDelegationSetCommand(args);
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
    Route53.prototype.getReusableDelegationSetLimit = function (args, optionsOrCb, cb) {
        var command = new GetReusableDelegationSetLimitCommand(args);
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
    Route53.prototype.getTrafficPolicy = function (args, optionsOrCb, cb) {
        var command = new GetTrafficPolicyCommand(args);
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
    Route53.prototype.getTrafficPolicyInstance = function (args, optionsOrCb, cb) {
        var command = new GetTrafficPolicyInstanceCommand(args);
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
    Route53.prototype.getTrafficPolicyInstanceCount = function (args, optionsOrCb, cb) {
        var command = new GetTrafficPolicyInstanceCountCommand(args);
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
    Route53.prototype.listGeoLocations = function (args, optionsOrCb, cb) {
        var command = new ListGeoLocationsCommand(args);
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
    Route53.prototype.listHealthChecks = function (args, optionsOrCb, cb) {
        var command = new ListHealthChecksCommand(args);
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
    Route53.prototype.listHostedZones = function (args, optionsOrCb, cb) {
        var command = new ListHostedZonesCommand(args);
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
    Route53.prototype.listHostedZonesByName = function (args, optionsOrCb, cb) {
        var command = new ListHostedZonesByNameCommand(args);
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
    Route53.prototype.listHostedZonesByVPC = function (args, optionsOrCb, cb) {
        var command = new ListHostedZonesByVPCCommand(args);
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
    Route53.prototype.listQueryLoggingConfigs = function (args, optionsOrCb, cb) {
        var command = new ListQueryLoggingConfigsCommand(args);
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
    Route53.prototype.listResourceRecordSets = function (args, optionsOrCb, cb) {
        var command = new ListResourceRecordSetsCommand(args);
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
    Route53.prototype.listReusableDelegationSets = function (args, optionsOrCb, cb) {
        var command = new ListReusableDelegationSetsCommand(args);
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
    Route53.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    Route53.prototype.listTagsForResources = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourcesCommand(args);
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
    Route53.prototype.listTrafficPolicies = function (args, optionsOrCb, cb) {
        var command = new ListTrafficPoliciesCommand(args);
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
    Route53.prototype.listTrafficPolicyInstances = function (args, optionsOrCb, cb) {
        var command = new ListTrafficPolicyInstancesCommand(args);
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
    Route53.prototype.listTrafficPolicyInstancesByHostedZone = function (args, optionsOrCb, cb) {
        var command = new ListTrafficPolicyInstancesByHostedZoneCommand(args);
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
    Route53.prototype.listTrafficPolicyInstancesByPolicy = function (args, optionsOrCb, cb) {
        var command = new ListTrafficPolicyInstancesByPolicyCommand(args);
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
    Route53.prototype.listTrafficPolicyVersions = function (args, optionsOrCb, cb) {
        var command = new ListTrafficPolicyVersionsCommand(args);
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
    Route53.prototype.listVPCAssociationAuthorizations = function (args, optionsOrCb, cb) {
        var command = new ListVPCAssociationAuthorizationsCommand(args);
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
    Route53.prototype.testDNSAnswer = function (args, optionsOrCb, cb) {
        var command = new TestDNSAnswerCommand(args);
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
    Route53.prototype.updateHealthCheck = function (args, optionsOrCb, cb) {
        var command = new UpdateHealthCheckCommand(args);
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
    Route53.prototype.updateHostedZoneComment = function (args, optionsOrCb, cb) {
        var command = new UpdateHostedZoneCommentCommand(args);
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
    Route53.prototype.updateTrafficPolicyComment = function (args, optionsOrCb, cb) {
        var command = new UpdateTrafficPolicyCommentCommand(args);
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
    Route53.prototype.updateTrafficPolicyInstance = function (args, optionsOrCb, cb) {
        var command = new UpdateTrafficPolicyInstanceCommand(args);
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
    return Route53;
}(Route53Client));
export { Route53 };
//# sourceMappingURL=Route53.js.map