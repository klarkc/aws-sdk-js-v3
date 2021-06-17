import { __extends } from "tslib";
import { ListCertificatesByCARequest, ListCertificatesByCAResponse } from "../models/models_1";
import { deserializeAws_restJson1ListCertificatesByCACommand, serializeAws_restJson1ListCertificatesByCACommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the device certificates signed by the specified CA certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCertificatesByCACommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCertificatesByCACommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListCertificatesByCACommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificatesByCACommandInput} for command's `input` shape.
 * @see {@link ListCertificatesByCACommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCertificatesByCACommand = /** @class */ (function (_super) {
    __extends(ListCertificatesByCACommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCertificatesByCACommand(input) {
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
    ListCertificatesByCACommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListCertificatesByCACommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCertificatesByCARequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCertificatesByCAResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCertificatesByCACommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListCertificatesByCACommand(input, context);
    };
    ListCertificatesByCACommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListCertificatesByCACommand(output, context);
    };
    return ListCertificatesByCACommand;
}($Command));
export { ListCertificatesByCACommand };
//# sourceMappingURL=ListCertificatesByCACommand.js.map