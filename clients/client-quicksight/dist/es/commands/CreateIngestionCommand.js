import { __extends } from "tslib";
import { CreateIngestionRequest, CreateIngestionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateIngestionCommand, serializeAws_restJson1CreateIngestionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates and starts a new SPICE ingestion on a dataset</p>
 *
 * 		       <p>Any ingestions operating on tagged datasets inherit the same tags automatically for use in
 * 			access control. For an example, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/iam-ec2-resource-tags/">How do I create an IAM policy to control access to Amazon EC2 resources using
 * 				tags?</a> in the AWS Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateIngestionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateIngestionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateIngestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIngestionCommandInput} for command's `input` shape.
 * @see {@link CreateIngestionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateIngestionCommand = /** @class */ (function (_super) {
    __extends(CreateIngestionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateIngestionCommand(input) {
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
    CreateIngestionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateIngestionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateIngestionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateIngestionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateIngestionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateIngestionCommand(input, context);
    };
    CreateIngestionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateIngestionCommand(output, context);
    };
    return CreateIngestionCommand;
}($Command));
export { CreateIngestionCommand };
//# sourceMappingURL=CreateIngestionCommand.js.map