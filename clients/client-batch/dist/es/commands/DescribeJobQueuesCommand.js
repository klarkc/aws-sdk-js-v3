import { __extends } from "tslib";
import { DescribeJobQueuesRequest, DescribeJobQueuesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobQueuesCommand,
  serializeAws_restJson1DescribeJobQueuesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your job queues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeJobQueuesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeJobQueuesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DescribeJobQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobQueuesCommandInput} for command's `input` shape.
 * @see {@link DescribeJobQueuesCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeJobQueuesCommand = /** @class */ (function (_super) {
  __extends(DescribeJobQueuesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeJobQueuesCommand(input) {
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
  DescribeJobQueuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "DescribeJobQueuesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeJobQueuesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobQueuesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeJobQueuesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeJobQueuesCommand(input, context);
  };
  DescribeJobQueuesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeJobQueuesCommand(output, context);
  };
  return DescribeJobQueuesCommand;
})($Command);
export { DescribeJobQueuesCommand };
//# sourceMappingURL=DescribeJobQueuesCommand.js.map
