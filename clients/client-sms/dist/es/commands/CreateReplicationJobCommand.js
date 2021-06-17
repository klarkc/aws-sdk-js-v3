import { __extends } from "tslib";
import { CreateReplicationJobRequest, CreateReplicationJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateReplicationJobCommand, serializeAws_json1_1CreateReplicationJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a replication job. The replication job schedules periodic replication runs
 *             to replicate your server to AWS. Each replication run creates an Amazon Machine Image
 *             (AMI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, CreateReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, CreateReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new CreateReplicationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationJobCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReplicationJobCommand = /** @class */ (function (_super) {
    __extends(CreateReplicationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReplicationJobCommand(input) {
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
    CreateReplicationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "CreateReplicationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReplicationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReplicationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReplicationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateReplicationJobCommand(input, context);
    };
    CreateReplicationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateReplicationJobCommand(output, context);
    };
    return CreateReplicationJobCommand;
}($Command));
export { CreateReplicationJobCommand };
//# sourceMappingURL=CreateReplicationJobCommand.js.map