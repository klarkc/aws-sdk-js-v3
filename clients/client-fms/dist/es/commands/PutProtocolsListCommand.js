import { __extends } from "tslib";
import { PutProtocolsListRequest, PutProtocolsListResponse } from "../models/models_0";
import { deserializeAws_json1_1PutProtocolsListCommand, serializeAws_json1_1PutProtocolsListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS Firewall Manager protocols list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutProtocolsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutProtocolsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutProtocolsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutProtocolsListCommandInput} for command's `input` shape.
 * @see {@link PutProtocolsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutProtocolsListCommand = /** @class */ (function (_super) {
    __extends(PutProtocolsListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutProtocolsListCommand(input) {
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
    PutProtocolsListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "PutProtocolsListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutProtocolsListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutProtocolsListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutProtocolsListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutProtocolsListCommand(input, context);
    };
    PutProtocolsListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutProtocolsListCommand(output, context);
    };
    return PutProtocolsListCommand;
}($Command));
export { PutProtocolsListCommand };
//# sourceMappingURL=PutProtocolsListCommand.js.map