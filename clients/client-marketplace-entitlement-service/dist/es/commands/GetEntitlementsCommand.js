import { __extends } from "tslib";
import { GetEntitlementsRequest, GetEntitlementsResult } from "../models/models_0";
import { deserializeAws_json1_1GetEntitlementsCommand, serializeAws_json1_1GetEntitlementsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>GetEntitlements retrieves entitlement values for a given product. The results can be
 *       filtered based on customer identifier or product dimensions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } from "@aws-sdk/client-marketplace-entitlement-service"; // ES Modules import
 * // const { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } = require("@aws-sdk/client-marketplace-entitlement-service"); // CommonJS import
 * const client = new MarketplaceEntitlementServiceClient(config);
 * const command = new GetEntitlementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GetEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceEntitlementServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEntitlementsCommand = /** @class */ (function (_super) {
    __extends(GetEntitlementsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEntitlementsCommand(input) {
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
    GetEntitlementsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceEntitlementServiceClient";
        var commandName = "GetEntitlementsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEntitlementsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEntitlementsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEntitlementsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetEntitlementsCommand(input, context);
    };
    GetEntitlementsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetEntitlementsCommand(output, context);
    };
    return GetEntitlementsCommand;
}($Command));
export { GetEntitlementsCommand };
//# sourceMappingURL=GetEntitlementsCommand.js.map