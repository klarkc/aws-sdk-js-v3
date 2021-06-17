import { __extends } from "tslib";
import { GetOperationDetailRequest, GetOperationDetailResponse } from "../models/models_0";
import { deserializeAws_json1_1GetOperationDetailCommand, serializeAws_json1_1GetOperationDetailCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation returns the current status of an operation that is not completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetOperationDetailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetOperationDetailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetOperationDetailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOperationDetailCommandInput} for command's `input` shape.
 * @see {@link GetOperationDetailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOperationDetailCommand = /** @class */ (function (_super) {
    __extends(GetOperationDetailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOperationDetailCommand(input) {
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
    GetOperationDetailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "GetOperationDetailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOperationDetailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOperationDetailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOperationDetailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOperationDetailCommand(input, context);
    };
    GetOperationDetailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOperationDetailCommand(output, context);
    };
    return GetOperationDetailCommand;
}($Command));
export { GetOperationDetailCommand };
//# sourceMappingURL=GetOperationDetailCommand.js.map