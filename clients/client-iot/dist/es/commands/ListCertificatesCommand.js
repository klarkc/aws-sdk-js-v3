import { __extends } from "tslib";
import { ListCertificatesRequest, ListCertificatesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListCertificatesCommand, serializeAws_restJson1ListCertificatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the certificates registered in your AWS account.</p>
 *          <p>The results are paginated with a default page size of 25. You can use the returned
 *          marker to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCertificatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCertificatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCertificatesCommand = /** @class */ (function (_super) {
    __extends(ListCertificatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCertificatesCommand(input) {
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
    ListCertificatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCertificatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCertificatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListCertificatesCommand(input, context);
    };
    ListCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListCertificatesCommand(output, context);
    };
    return ListCertificatesCommand;
}($Command));
export { ListCertificatesCommand };
//# sourceMappingURL=ListCertificatesCommand.js.map