import { __extends } from "tslib";
import { GetDomainDetailRequest, GetDomainDetailResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDomainDetailCommand, serializeAws_json1_1GetDomainDetailCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation returns detailed information about a specified domain that is associated with the current AWS account.
 * 			Contact information for the domain is also returned as part of the output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetDomainDetailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetDomainDetailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetDomainDetailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainDetailCommandInput} for command's `input` shape.
 * @see {@link GetDomainDetailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainDetailCommand = /** @class */ (function (_super) {
    __extends(GetDomainDetailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDomainDetailCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    GetDomainDetailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "GetDomainDetailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDomainDetailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDomainDetailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDomainDetailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDomainDetailCommand(input, context);
    };
    GetDomainDetailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDomainDetailCommand(output, context);
    };
    return GetDomainDetailCommand;
}($Command));
export { GetDomainDetailCommand };
//# sourceMappingURL=GetDomainDetailCommand.js.map