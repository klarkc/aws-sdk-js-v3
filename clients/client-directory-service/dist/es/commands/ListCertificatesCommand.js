import { __extends } from "tslib";
import { ListCertificatesRequest, ListCertificatesResult } from "../models/models_0";
import { deserializeAws_json1_1ListCertificatesCommand, serializeAws_json1_1ListCertificatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListCertificatesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListCertificatesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "DirectoryServiceClient";
        var commandName = "ListCertificatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCertificatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCertificatesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCertificatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCertificatesCommand(input, context);
    };
    ListCertificatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCertificatesCommand(output, context);
    };
    return ListCertificatesCommand;
}($Command));
export { ListCertificatesCommand };
//# sourceMappingURL=ListCertificatesCommand.js.map