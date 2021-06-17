import { __extends } from "tslib";
import { GetRepositoryEndpointRequest, GetRepositoryEndpointResult } from "../models/models_0";
import { deserializeAws_restJson1GetRepositoryEndpointCommand, serializeAws_restJson1GetRepositoryEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
 *       package format:
 *     </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>npm</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>pypi</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>maven</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryEndpointCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryEndpointCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetRepositoryEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryEndpointCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryEndpointCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRepositoryEndpointCommand = /** @class */ (function (_super) {
    __extends(GetRepositoryEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRepositoryEndpointCommand(input) {
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
    GetRepositoryEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "GetRepositoryEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRepositoryEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRepositoryEndpointResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRepositoryEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRepositoryEndpointCommand(input, context);
    };
    GetRepositoryEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRepositoryEndpointCommand(output, context);
    };
    return GetRepositoryEndpointCommand;
}($Command));
export { GetRepositoryEndpointCommand };
//# sourceMappingURL=GetRepositoryEndpointCommand.js.map