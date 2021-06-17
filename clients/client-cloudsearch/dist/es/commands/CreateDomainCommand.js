import { __extends } from "tslib";
import { CreateDomainRequest, CreateDomainResponse } from "../models/models_0";
import { deserializeAws_queryCreateDomainCommand, serializeAws_queryCreateDomainCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new search domain. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, CreateDomainCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, CreateDomainCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "CloudSearchClient";
        var commandName = "CreateDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDomainCommand(input, context);
    };
    CreateDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDomainCommand(output, context);
    };
    return CreateDomainCommand;
}($Command));
export { CreateDomainCommand };
//# sourceMappingURL=CreateDomainCommand.js.map