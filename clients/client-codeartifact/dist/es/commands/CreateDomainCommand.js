import { __extends } from "tslib";
import { CreateDomainRequest, CreateDomainResult } from "../models/models_0";
import { deserializeAws_restJson1CreateDomainCommand, serializeAws_restJson1CreateDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Creates a domain. CodeArtifact <i>domains</i> make it easier to manage multiple repositories across an
 *         organization. You can use a domain to apply permissions across many
 *         repositories owned by different AWS accounts. An asset is stored only once
 *         in a domain, even if it's in multiple repositories.
 *     </p>
 *
 *          <p>Although you can have multiple domains, we recommend a single production domain that contains all
 *         published artifacts so that your development teams can find and share packages. You can use a second
 *         pre-production domain to test changes to the production domain configuration.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, CreateDomainCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, CreateDomainCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "CodeartifactClient";
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
        return serializeAws_restJson1CreateDomainCommand(input, context);
    };
    CreateDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDomainCommand(output, context);
    };
    return CreateDomainCommand;
}($Command));
export { CreateDomainCommand };
//# sourceMappingURL=CreateDomainCommand.js.map