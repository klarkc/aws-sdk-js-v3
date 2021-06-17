import { __extends } from "tslib";
import { DeleteDomainRequest, DeleteDomainResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDomainCommand, serializeAws_json1_1DeleteDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified domain recordset and all of its domain records.</p>
 *          <p>The <code>delete domain</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>domain name</code>. For more information, see
 *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDomainCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDomainCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDomainCommand = /** @class */ (function (_super) {
    __extends(DeleteDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDomainCommand(input) {
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
    DeleteDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDomainResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDomainCommand(input, context);
    };
    DeleteDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDomainCommand(output, context);
    };
    return DeleteDomainCommand;
}($Command));
export { DeleteDomainCommand };
//# sourceMappingURL=DeleteDomainCommand.js.map