import { __extends } from "tslib";
import { CreateJobQueueRequest, CreateJobQueueResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateJobQueueCommand,
  serializeAws_restJson1CreateJobQueueCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS Batch job queue. When you create a job queue, you associate one or more compute environments to the
 *    queue and assign an order of preference for the compute environments.</p>
 *          <p>You also set a priority to the job queue that determines the order that the AWS Batch scheduler places jobs onto
 *    its associated compute environments. For example, if a compute environment is associated with more than one job
 *    queue, the job queue with a higher priority is given preference for scheduling jobs to that compute
 *    environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new CreateJobQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateJobQueueCommandInput} for command's `input` shape.
 * @see {@link CreateJobQueueCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateJobQueueCommand = /** @class */ (function (_super) {
  __extends(CreateJobQueueCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateJobQueueCommand(input) {
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
  CreateJobQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "CreateJobQueueCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateJobQueueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateJobQueueResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateJobQueueCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateJobQueueCommand(input, context);
  };
  CreateJobQueueCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateJobQueueCommand(output, context);
  };
  return CreateJobQueueCommand;
})($Command);
export { CreateJobQueueCommand };
//# sourceMappingURL=CreateJobQueueCommand.js.map
