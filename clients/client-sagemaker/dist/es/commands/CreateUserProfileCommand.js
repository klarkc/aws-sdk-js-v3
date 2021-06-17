import { __extends } from "tslib";
import { CreateUserProfileRequest, CreateUserProfileResponse } from "../models/models_1";
import { deserializeAws_json1_1CreateUserProfileCommand, serializeAws_json1_1CreateUserProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a user profile. A user profile represents a single user within a domain, and is
 *      the main way to reference a "person" for the purposes of sharing, reporting, and other
 *      user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an
 *      administrator invites a person by email or imports them from SSO, a user profile is
 *      automatically created. A user profile is the primary holder of settings for an individual
 *      user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
 *    </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateUserProfileCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateUserProfileCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserProfileCommandInput} for command's `input` shape.
 * @see {@link CreateUserProfileCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserProfileCommand = /** @class */ (function (_super) {
    __extends(CreateUserProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserProfileCommand(input) {
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
    CreateUserProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateUserProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateUserProfileCommand(input, context);
    };
    CreateUserProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateUserProfileCommand(output, context);
    };
    return CreateUserProfileCommand;
}($Command));
export { CreateUserProfileCommand };
//# sourceMappingURL=CreateUserProfileCommand.js.map