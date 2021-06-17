import { __extends } from "tslib";
import { CreateTrailRequest, CreateTrailResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateTrailCommand, serializeAws_json1_1CreateTrailCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, CreateTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, CreateTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new CreateTrailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrailCommandInput} for command's `input` shape.
 * @see {@link CreateTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrailCommand = /** @class */ (function (_super) {
    __extends(CreateTrailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrailCommand(input) {
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
    CreateTrailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "CreateTrailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrailCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTrailCommand(input, context);
    };
    CreateTrailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTrailCommand(output, context);
    };
    return CreateTrailCommand;
}($Command));
export { CreateTrailCommand };
//# sourceMappingURL=CreateTrailCommand.js.map