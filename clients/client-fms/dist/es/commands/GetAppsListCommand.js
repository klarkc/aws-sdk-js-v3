import { __extends } from "tslib";
import { GetAppsListRequest, GetAppsListResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAppsListCommand, serializeAws_json1_1GetAppsListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified AWS Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetAppsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppsListCommandInput} for command's `input` shape.
 * @see {@link GetAppsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAppsListCommand = /** @class */ (function (_super) {
    __extends(GetAppsListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAppsListCommand(input) {
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
    GetAppsListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "GetAppsListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAppsListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAppsListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAppsListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAppsListCommand(input, context);
    };
    GetAppsListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAppsListCommand(output, context);
    };
    return GetAppsListCommand;
}($Command));
export { GetAppsListCommand };
//# sourceMappingURL=GetAppsListCommand.js.map