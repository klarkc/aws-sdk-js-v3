import { __extends } from "tslib";
import { StartSigningJobRequest, StartSigningJobResponse } from "../models/models_0";
import { deserializeAws_restJson1StartSigningJobCommand, serializeAws_restJson1StartSigningJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates a signing job to be performed on the code provided. Signing jobs are
 * 			viewable by the <code>ListSigningJobs</code> operation for two years after they are
 * 			performed. Note the following requirements: </p>
 * 		       <ul>
 *             <li>
 * 				           <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create a Bucket</a> in the
 * 						<i>Amazon S3 Getting Started Guide</i>. </p>
 * 			         </li>
 *             <li>
 * 				           <p>Your S3 source bucket must be version enabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You must create an S3 destination bucket. Code signing uses your S3 destination
 * 					bucket to write your signed code.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You specify the name of the source and destination buckets when calling the
 * 						<code>StartSigningJob</code> operation.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You must also specify a request token that identifies your request to
 * 					code signing.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call
 * 			<code>StartSigningJob</code>.</p>
 * 		       <p>For a Java example that shows how to use this action, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/">http://docs.aws.amazon.com/acm/latest/userguide/</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, StartSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, StartSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new StartSigningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSigningJobCommandInput} for command's `input` shape.
 * @see {@link StartSigningJobCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartSigningJobCommand = /** @class */ (function (_super) {
    __extends(StartSigningJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartSigningJobCommand(input) {
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
    StartSigningJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "StartSigningJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartSigningJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartSigningJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartSigningJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartSigningJobCommand(input, context);
    };
    StartSigningJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartSigningJobCommand(output, context);
    };
    return StartSigningJobCommand;
}($Command));
export { StartSigningJobCommand };
//# sourceMappingURL=StartSigningJobCommand.js.map