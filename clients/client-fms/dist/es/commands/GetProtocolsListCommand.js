import { __extends } from "tslib";
import { GetProtocolsListRequest, GetProtocolsListResponse } from "../models/models_0";
import { deserializeAws_json1_1GetProtocolsListCommand, serializeAws_json1_1GetProtocolsListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified AWS Firewall Manager protocols list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetProtocolsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetProtocolsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProtocolsListCommandInput} for command's `input` shape.
 * @see {@link GetProtocolsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProtocolsListCommand = /** @class */ (function (_super) {
    __extends(GetProtocolsListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProtocolsListCommand(input) {
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
    GetProtocolsListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "GetProtocolsListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProtocolsListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetProtocolsListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProtocolsListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetProtocolsListCommand(input, context);
    };
    GetProtocolsListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetProtocolsListCommand(output, context);
    };
    return GetProtocolsListCommand;
}($Command));
export { GetProtocolsListCommand };
//# sourceMappingURL=GetProtocolsListCommand.js.map