import { __extends } from "tslib";
import { CreateWorkteamRequest, CreateWorkteamResponse } from "../models/models_1";
import { deserializeAws_json1_1CreateWorkteamCommand, serializeAws_json1_1CreateWorkteamCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new work team for labeling your data. A work team is defined by one or more
 *             Amazon Cognito user pools. You must first create the user pools before you can create a work
 *             team.</p>
 *         <p>You cannot create more than 25 work teams in an account and region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkteamCommandInput} for command's `input` shape.
 * @see {@link CreateWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorkteamCommand = /** @class */ (function (_super) {
    __extends(CreateWorkteamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorkteamCommand(input) {
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
    CreateWorkteamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateWorkteamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorkteamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorkteamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorkteamCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateWorkteamCommand(input, context);
    };
    CreateWorkteamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateWorkteamCommand(output, context);
    };
    return CreateWorkteamCommand;
}($Command));
export { CreateWorkteamCommand };
//# sourceMappingURL=CreateWorkteamCommand.js.map