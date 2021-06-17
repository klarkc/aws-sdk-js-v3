import { __extends } from "tslib";
import { CreateMLTransformRequest, CreateMLTransformResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateMLTransformCommand, serializeAws_json1_1CreateMLTransformCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS Glue machine learning transform. This operation creates the transform and
 *       all the necessary parameters to train it.</p>
 *
 * 	        <p>Call this operation as the first step in the process of using a machine learning transform
 *       (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an
 *       optional <code>Description</code>, in addition to the parameters that you want to use for your
 *       algorithm.</p>
 *
 *          <p>You must also specify certain parameters for the tasks that AWS Glue runs on your
 *       behalf as part of learning from your data and creating a high-quality machine learning
 *       transform. These parameters include <code>Role</code>, and optionally,
 *         <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more
 *       information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMLTransformCommandInput} for command's `input` shape.
 * @see {@link CreateMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMLTransformCommand = /** @class */ (function (_super) {
    __extends(CreateMLTransformCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMLTransformCommand(input) {
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
    CreateMLTransformCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateMLTransformCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMLTransformRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMLTransformResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMLTransformCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateMLTransformCommand(input, context);
    };
    CreateMLTransformCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateMLTransformCommand(output, context);
    };
    return CreateMLTransformCommand;
}($Command));
export { CreateMLTransformCommand };
//# sourceMappingURL=CreateMLTransformCommand.js.map