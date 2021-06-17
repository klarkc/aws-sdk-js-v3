import { __extends } from "tslib";
import { CreateProjectRequest, CreateProjectResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateProjectCommand, serializeAws_restJson1CreateProjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an empty project with a placement template. A project contains zero or more
 *       placements that adhere to the placement template defined in the project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, CreateProjectCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, CreateProjectCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProjectCommand = /** @class */ (function (_super) {
    __extends(CreateProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProjectCommand(input) {
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
    CreateProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "CreateProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProjectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateProjectCommand(input, context);
    };
    CreateProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateProjectCommand(output, context);
    };
    return CreateProjectCommand;
}($Command));
export { CreateProjectCommand };
//# sourceMappingURL=CreateProjectCommand.js.map