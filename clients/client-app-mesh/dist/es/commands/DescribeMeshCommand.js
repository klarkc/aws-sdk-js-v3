import { __extends } from "tslib";
import { DescribeMeshInput, DescribeMeshOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeMeshCommand,
  serializeAws_restJson1DescribeMeshCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeMeshCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMeshCommandInput} for command's `input` shape.
 * @see {@link DescribeMeshCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMeshCommand = /** @class */ (function (_super) {
  __extends(DescribeMeshCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeMeshCommand(input) {
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
  DescribeMeshCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "DescribeMeshCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeMeshInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMeshOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeMeshCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DescribeMeshCommand(input, context);
  };
  DescribeMeshCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DescribeMeshCommand(output, context);
  };
  return DescribeMeshCommand;
})($Command);
export { DescribeMeshCommand };
//# sourceMappingURL=DescribeMeshCommand.js.map
