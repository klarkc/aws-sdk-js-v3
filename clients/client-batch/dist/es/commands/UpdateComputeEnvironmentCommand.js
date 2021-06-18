import { __extends } from "tslib";
import { UpdateComputeEnvironmentRequest, UpdateComputeEnvironmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateComputeEnvironmentCommand,
  serializeAws_restJson1UpdateComputeEnvironmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an AWS Batch compute environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new UpdateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateComputeEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateComputeEnvironmentCommand = /** @class */ (function (_super) {
  __extends(UpdateComputeEnvironmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateComputeEnvironmentCommand(input) {
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
  UpdateComputeEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "UpdateComputeEnvironmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateComputeEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateComputeEnvironmentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateComputeEnvironmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateComputeEnvironmentCommand(input, context);
  };
  UpdateComputeEnvironmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateComputeEnvironmentCommand(output, context);
  };
  return UpdateComputeEnvironmentCommand;
})($Command);
export { UpdateComputeEnvironmentCommand };
//# sourceMappingURL=UpdateComputeEnvironmentCommand.js.map
