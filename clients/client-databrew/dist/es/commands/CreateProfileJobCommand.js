import { __extends } from "tslib";
import { CreateProfileJobRequest, CreateProfileJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateProfileJobCommand, serializeAws_restJson1CreateProfileJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new job to analyze a dataset and create its data profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateProfileJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateProfileJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateProfileJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProfileJobCommandInput} for command's `input` shape.
 * @see {@link CreateProfileJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProfileJobCommand = /** @class */ (function (_super) {
    __extends(CreateProfileJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProfileJobCommand(input) {
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
    CreateProfileJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "CreateProfileJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProfileJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProfileJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProfileJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateProfileJobCommand(input, context);
    };
    CreateProfileJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateProfileJobCommand(output, context);
    };
    return CreateProfileJobCommand;
}($Command));
export { CreateProfileJobCommand };
//# sourceMappingURL=CreateProfileJobCommand.js.map