import { __extends } from "tslib";
import { UpdateDomainEntryRequest, UpdateDomainEntryResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateDomainEntryCommand, serializeAws_json1_1UpdateDomainEntryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a domain recordset after it is created.</p>
 *          <p>The <code>update domain entry</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>domain name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateDomainEntryCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateDomainEntryCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateDomainEntryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainEntryCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainEntryCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainEntryCommand = /** @class */ (function (_super) {
    __extends(UpdateDomainEntryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDomainEntryCommand(input) {
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
    UpdateDomainEntryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "UpdateDomainEntryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDomainEntryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDomainEntryResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDomainEntryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDomainEntryCommand(input, context);
    };
    UpdateDomainEntryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDomainEntryCommand(output, context);
    };
    return UpdateDomainEntryCommand;
}($Command));
export { UpdateDomainEntryCommand };
//# sourceMappingURL=UpdateDomainEntryCommand.js.map