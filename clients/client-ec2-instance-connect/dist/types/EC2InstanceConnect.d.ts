import { EC2InstanceConnectClient } from "./EC2InstanceConnectClient";
import { SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput } from "./commands/SendSSHPublicKeyCommand";
import { SendSerialConsoleSSHPublicKeyCommandInput, SendSerialConsoleSSHPublicKeyCommandOutput } from "./commands/SendSerialConsoleSSHPublicKeyCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH
 *             public keys to EC2, providing users a simple and secure way to connect to their
 *             instances.</p>
 */
export declare class EC2InstanceConnect extends EC2InstanceConnectClient {
    /**
     * <p>Pushes an SSH public key to the specified EC2 instance. The key remains for 60
     *             seconds, which gives you 60 seconds to establish a serial console connection to the
     *             instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in
     *             the <i>Amazon EC2 User Guide</i>.</p>
     */
    sendSerialConsoleSSHPublicKey(args: SendSerialConsoleSSHPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<SendSerialConsoleSSHPublicKeyCommandOutput>;
    sendSerialConsoleSSHPublicKey(args: SendSerialConsoleSSHPublicKeyCommandInput, cb: (err: any, data?: SendSerialConsoleSSHPublicKeyCommandOutput) => void): void;
    sendSerialConsoleSSHPublicKey(args: SendSerialConsoleSSHPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendSerialConsoleSSHPublicKeyCommandOutput) => void): void;
    /**
     * <p>Pushes an SSH public key to the specified EC2 instance for use by the specified user.
     *             The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to
     *                 your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2
     *                 User Guide</i>.</p>
     */
    sendSSHPublicKey(args: SendSSHPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<SendSSHPublicKeyCommandOutput>;
    sendSSHPublicKey(args: SendSSHPublicKeyCommandInput, cb: (err: any, data?: SendSSHPublicKeyCommandOutput) => void): void;
    sendSSHPublicKey(args: SendSSHPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendSSHPublicKeyCommandOutput) => void): void;
}
