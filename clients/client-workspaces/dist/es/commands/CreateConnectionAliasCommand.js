import { __extends } from "tslib";
import { CreateConnectionAliasRequest, CreateConnectionAliasResult } from "../models/models_0";
import { deserializeAws_json1_1CreateConnectionAliasCommand, serializeAws_json1_1CreateConnectionAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the specified connection alias for use with cross-Region redirection. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConnectionAliasCommand = /** @class */ (function (_super) {
    __extends(CreateConnectionAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConnectionAliasCommand(input) {
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
    CreateConnectionAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "CreateConnectionAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConnectionAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateConnectionAliasResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConnectionAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateConnectionAliasCommand(input, context);
    };
    CreateConnectionAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateConnectionAliasCommand(output, context);
    };
    return CreateConnectionAliasCommand;
}($Command));
export { CreateConnectionAliasCommand };
//# sourceMappingURL=CreateConnectionAliasCommand.js.map