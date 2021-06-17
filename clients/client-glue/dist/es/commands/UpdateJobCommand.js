import { __extends } from "tslib";
import { UpdateJobRequest, UpdateJobResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateJobCommand, serializeAws_json1_1UpdateJobCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobCommandInput} for command's `input` shape.
 * @see {@link UpdateJobCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJobCommand = /** @class */ (function (_super) {
    __extends(UpdateJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateJobCommand(input) {
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
    UpdateJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateJobCommand(input, context);
    };
    UpdateJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateJobCommand(output, context);
    };
    return UpdateJobCommand;
}($Command));
export { UpdateJobCommand };
//# sourceMappingURL=UpdateJobCommand.js.map