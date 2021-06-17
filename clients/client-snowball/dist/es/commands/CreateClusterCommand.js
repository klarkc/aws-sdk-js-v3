import { __extends } from "tslib";
import { CreateClusterRequest, CreateClusterResult } from "../models/models_0";
import { deserializeAws_json1_1CreateClusterCommand, serializeAws_json1_1CreateClusterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The
 *       cluster does not ship until these five node jobs have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClusterCommand = /** @class */ (function (_super) {
    __extends(CreateClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClusterCommand(input) {
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
    CreateClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "CreateClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateClusterCommand(input, context);
    };
    CreateClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateClusterCommand(output, context);
    };
    return CreateClusterCommand;
}($Command));
export { CreateClusterCommand };
//# sourceMappingURL=CreateClusterCommand.js.map