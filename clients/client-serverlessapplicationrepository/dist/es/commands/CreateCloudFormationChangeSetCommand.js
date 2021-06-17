import { __extends } from "tslib";
import { CreateCloudFormationChangeSetRequest, CreateCloudFormationChangeSetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCloudFormationChangeSetCommand, serializeAws_restJson1CreateCloudFormationChangeSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS CloudFormation change set for the given application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new CreateCloudFormationChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationChangeSetCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCloudFormationChangeSetCommand = /** @class */ (function (_super) {
    __extends(CreateCloudFormationChangeSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCloudFormationChangeSetCommand(input) {
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
    CreateCloudFormationChangeSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServerlessApplicationRepositoryClient";
        var commandName = "CreateCloudFormationChangeSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCloudFormationChangeSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCloudFormationChangeSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCloudFormationChangeSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCloudFormationChangeSetCommand(input, context);
    };
    CreateCloudFormationChangeSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCloudFormationChangeSetCommand(output, context);
    };
    return CreateCloudFormationChangeSetCommand;
}($Command));
export { CreateCloudFormationChangeSetCommand };
//# sourceMappingURL=CreateCloudFormationChangeSetCommand.js.map