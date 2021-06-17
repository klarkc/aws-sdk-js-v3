import { __extends } from "tslib";
import { ListOutgoingCertificatesRequest, ListOutgoingCertificatesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListOutgoingCertificatesCommand, serializeAws_restJson1ListOutgoingCertificatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists certificates that are being transferred but not yet accepted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListOutgoingCertificatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListOutgoingCertificatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListOutgoingCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOutgoingCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListOutgoingCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOutgoingCertificatesCommand = /** @class */ (function (_super) {
    __extends(ListOutgoingCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOutgoingCertificatesCommand(input) {
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
    ListOutgoingCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListOutgoingCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOutgoingCertificatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOutgoingCertificatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOutgoingCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListOutgoingCertificatesCommand(input, context);
    };
    ListOutgoingCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListOutgoingCertificatesCommand(output, context);
    };
    return ListOutgoingCertificatesCommand;
}($Command));
export { ListOutgoingCertificatesCommand };
//# sourceMappingURL=ListOutgoingCertificatesCommand.js.map