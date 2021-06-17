import { __extends } from "tslib";
import { GetResourceCollectionRequest, GetResourceCollectionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetResourceCollectionCommand, serializeAws_restJson1GetResourceCollectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns lists AWS resources that are of the specified resource collection type. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
 *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, GetResourceCollectionCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, GetResourceCollectionCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new GetResourceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceCollectionCommandInput} for command's `input` shape.
 * @see {@link GetResourceCollectionCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceCollectionCommand = /** @class */ (function (_super) {
    __extends(GetResourceCollectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceCollectionCommand(input) {
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
    GetResourceCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "GetResourceCollectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceCollectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceCollectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceCollectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResourceCollectionCommand(input, context);
    };
    GetResourceCollectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResourceCollectionCommand(output, context);
    };
    return GetResourceCollectionCommand;
}($Command));
export { GetResourceCollectionCommand };
//# sourceMappingURL=GetResourceCollectionCommand.js.map