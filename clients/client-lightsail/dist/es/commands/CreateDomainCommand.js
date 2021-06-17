import { __extends } from "tslib";
import { CreateDomainRequest, CreateDomainResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDomainCommand, serializeAws_json1_1CreateDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a domain resource for the specified domain (e.g., example.com).</p>
 *          <p>The <code>create domain</code> operation supports tag-based access control via request
 *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDomainCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDomainCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDomainCommand = /** @class */ (function (_super) {
    __extends(CreateDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDomainCommand(input) {
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
    CreateDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDomainResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDomainCommand(input, context);
    };
    CreateDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDomainCommand(output, context);
    };
    return CreateDomainCommand;
}($Command));
export { CreateDomainCommand };
//# sourceMappingURL=CreateDomainCommand.js.map