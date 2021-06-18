import { __extends } from "tslib";
import { TerminateJobRequest, TerminateJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1TerminateJobCommand,
  serializeAws_restJson1TerminateJobCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are
 *    terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the
 *     <code>STARTING</code> state are cancelled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, TerminateJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, TerminateJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new TerminateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateJobCommandInput} for command's `input` shape.
 * @see {@link TerminateJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TerminateJobCommand = /** @class */ (function (_super) {
  __extends(TerminateJobCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function TerminateJobCommand(input) {
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
  TerminateJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "TerminateJobCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: TerminateJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TerminateJobResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  TerminateJobCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1TerminateJobCommand(input, context);
  };
  TerminateJobCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1TerminateJobCommand(output, context);
  };
  return TerminateJobCommand;
})($Command);
export { TerminateJobCommand };
//# sourceMappingURL=TerminateJobCommand.js.map
