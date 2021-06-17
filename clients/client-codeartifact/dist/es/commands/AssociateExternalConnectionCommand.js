import { __extends } from "tslib";
import { AssociateExternalConnectionRequest, AssociateExternalConnectionResult } from "../models/models_0";
import { deserializeAws_restJson1AssociateExternalConnectionCommand, serializeAws_restJson1AssociateExternalConnectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an existing external connection to a repository. One external connection is allowed
 *       per repository.</p>
 *          <note>
 *             <p>A repository can have one or more upstream repositories, or an external connection.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, AssociateExternalConnectionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, AssociateExternalConnectionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new AssociateExternalConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateExternalConnectionCommandInput} for command's `input` shape.
 * @see {@link AssociateExternalConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateExternalConnectionCommand = /** @class */ (function (_super) {
    __extends(AssociateExternalConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateExternalConnectionCommand(input) {
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
    AssociateExternalConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "AssociateExternalConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateExternalConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateExternalConnectionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateExternalConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateExternalConnectionCommand(input, context);
    };
    AssociateExternalConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateExternalConnectionCommand(output, context);
    };
    return AssociateExternalConnectionCommand;
}($Command));
export { AssociateExternalConnectionCommand };
//# sourceMappingURL=AssociateExternalConnectionCommand.js.map